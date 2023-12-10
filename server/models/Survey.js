const { Schema, model } = require("mongoose");

const surveySchema = new Schema(
  {
    sleep_quality: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    headaches: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    performance: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    workload: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    hobbies: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    stress: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    therapy: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
    outside: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
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
      virtuals: true,
      getters: true,
    },
  }
);

surveySchema.virtual("avgValue").get(function () {
  const chosenValue = [
    this.sleep_quality,
    this.headaches,
    this.performance,
    this.workload,
    this.hobbies,
    this.stress,
    this.therapy,
    this.outside,
    // TODO: There's an issue with adding this.createdAt into the model, which prevents accessing and updating the profile. We need to figure out how to add createdAt into the line chart in order for it to update properly. We also need an X and Y value as part of a line chart.
    // this.createdAt,
  ];
  const totalValue = chosenValue.reduce((sum, score) => sum + score, 0);
  const avgValue = totalValue / chosenValue.length;

  return avgValue;
});
const Survey = model("Survey", surveySchema);

module.exports = Survey;
