const mongoose = require("mongoose");
require("dotenv").config();

exports.createDatabaseConnection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};
