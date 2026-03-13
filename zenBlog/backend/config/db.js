const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URI);
    console.log("Database Connected Successfuly");
  } catch (error) {
    console.log(error);
  }
};
