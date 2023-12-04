const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb database');

module.exports = mongoose.connection;
