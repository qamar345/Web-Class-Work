const Users = require("../models/users.model");
const bcrypt = require("bcryptjs");
require("dotenv").config();

exports.seedAdmin = async () => {
  try {
    const getAdmin = await Users.findOne({ email: process.env.ADMIN_EMAIL });

    if (getAdmin) {
      console.log("Admin Already Exist!!!");
      return;
    }

    const hashPassword = await bcrypt.hash(process.env.ADMIN_PASS, 10);

    const admin = await Users.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: hashPassword,
      role: process.env.ADMIN_ROLE,
    });

    console.log("Admin Seed Successfuly");
  } catch (error) {
    console.log(error);
  }
};
