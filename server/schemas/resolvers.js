const { User, Thought, Survey } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    //look at the queries in client folder
    users: async () => {
      return User.find().populate("thoughts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .populate("thoughts")
        .populate("surveys");
    }, //This is for testing purposes only
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
    survey: async (parent, { surveyId }) => {
      return Survey.findOne({ _id: surveyId });
    },
    me: async (parent, args, context) => {
      //=profile page
      if (context.user) {
        return User.findOne({ _id: context.user._id })
          .populate("thoughts")
          .populate("surveys");
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addThought: async (parent, { thoughtText }, context) => {
      //POST
      if (context.user) {
        const thought = await Thought.create({
          thoughtText,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );

        return thought;
      }
      throw AuthenticationError;
      ("You need to be logged in!");
    },
    updateThought: async (parent, { thoughtId, thoughtText }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndUpdate(
          {
            _id: thoughtId,
            thoughtAuthor: context.user.username,
          },
          {
            $set: {
              thoughtText,
              updatedAt: new Date(),
            },
          },
          { new: true }
        );
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { thoughts: thought._id } },
          { new: true, upsert: true }
        );

        return thought;
      }
      throw AuthenticationError;
    },
    removeThought: async (parent, { thoughtId }, context) => {
      if (context.user) {
        const thought = await Thought.findOneAndDelete({
          _id: thoughtId,
          thoughtAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { thoughts: thought._id } }
        );

        return thought;
      }
      throw AuthenticationError;
    },
    userSurveyResponse: async (
      parent,
      {
        sleep_quality,
        headaches,
        performance,
        workload,
        hobbies,
        stress,
        therapy,
        outside,
      },
      context
    ) => {
      if (context.user) {
        const survey = await Survey.create({
          sleep_quality,
          headaches,
          performance,
          workload,
          hobbies,
          stress,
          therapy,
          outside,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { surveys: survey._id } },
          { new: true }
        );

        const chosenValue = [
          sleep_quality,
          headaches,
          performance,
          workload,
          hobbies,
          stress,
          therapy,
          outside,
        ];
        const totalValue = chosenValue.reduce((sum, score) => sum + score, 0);
        const avgValue = totalValue / chosenValue.length;

        return { avgValue, survey };
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
