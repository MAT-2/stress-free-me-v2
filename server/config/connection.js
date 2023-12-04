const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || process.env.DB_NAME);

module.exports = mongoose.connection;
