const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const user = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
      surveys: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Survey',
        },
      ],
});

user.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const rounds = 15;
        this.password = await bcrypt.hash(this.password, rounds);
    }

    next();1
});

user.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};
const User = model('User', user);

module.exports = User;