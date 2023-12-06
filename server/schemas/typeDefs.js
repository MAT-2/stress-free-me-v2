const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
    surveys: [Survey]!
  }

  type Survey {
    _id: ID
    sleep_quality: Int
    headaches: Int
    performance: Int
    workload: Int
    hobbies: Int
    stress: Int
    therapy: Int
    outside: Int
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    survey(surveyId: ID!): Survey
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    updateThought(thoughtId: ID!, thoughtText: String!): Thought
    userSurveyResponse( sleep_quality: Int, headaches: Int, performance: Int, workload: Int, hobbies: Int, stress: Int, therapy: Int, outside: Int): Survey
  }
`;

module.exports = typeDefs;
