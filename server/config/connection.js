const mongoose = require("mongoose");
// require("dotenv").config();
// process.env.DB_NAME 

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.vw25nz0.mongodb.net/StressFreeMe' );

module.exports = mongoose.connection;
