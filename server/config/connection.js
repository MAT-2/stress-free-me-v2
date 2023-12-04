const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://root:admin123@cluster0.l7purnz.mongodb.net/StressFreeMe"
);

module.exports = mongoose.connection;
