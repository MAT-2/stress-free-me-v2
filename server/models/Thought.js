const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  thoughtAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    // get: (timestamp) => dateFormat(timestamp),
    get: function (time) {
      return time.toLocaleString();
    },
  },
},
{
  toJSON: {
    getters: true, 
  },
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;