const { Schema, model } = require('mongoose');

const surveySchema = new Schema({
    sleep_quality: {
        type: Number,
        enum: [1,2,3,4,5],
        required: true
      },
      headaches: {
        type: Number,
        enum: [1,2,3,4,5],
        required: true
      },
      performance: {
        type: Number,
        enum: [1,2,3,4,5],
        required: true
      },
      workload: {
        type: Number,
        enum: [1,2,3,4,5],
        required: true
      },
      hobbies: {
        type: Number,
        enum: [1,2,3,4,5],
        required: true
      },
      stress: {
        type: Number,
        enum: [1,2,3,4,5],
        required: true
      },
      therapy: {
        type: Number,
        enum: [1,2,3,4,5],
        required: true
      },
      outside: {
        type: Number,
        enum: [1,2,3,4,5],
        required: true
      },
});
const Survey = model('Survey', surveySchema);

module.exports = Survey;