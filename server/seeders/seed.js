const db = require('../config/connection');
const { User, Thought, Survey } = require('../models');
const userSeeds = require('./userSeeds.json');
const thoughtSeeds = require('./thoughtSeeds.json');
const surveySeeds = require('./surveySeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Thought', 'thoughts');

    await cleanDB('User', 'users');

    await cleanDB('Survey', 'surveys');

   const users = await User.create(userSeeds);
    

    for (let i = 0; i < thoughtSeeds.length; i++) {
      const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: thoughtAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
    
    for (let i = 0; i < surveySeeds.length; i++) {
      const { _id} = await Survey.create(surveySeeds[i]);
      const user = await User.findOneAndUpdate(
        {_id: users[i]._id},
        {
          $addToSet: {
            surveys: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
