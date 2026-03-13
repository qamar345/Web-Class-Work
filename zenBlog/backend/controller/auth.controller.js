const Users = require("../models/users.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;

  if (!name) res.json({ message: "Name field is required!" });
  if (!email) res.json({ message: "Email field is required!" });
  if (!password) res.json({ message: "Password field is required!" });
  if (password.length < 6)
    res.json({ message: " Password must have 6 characters" });
  if (!passRegex.test(password)) {
    return res.json({
      message:
        "Password must have an alphabet, a number, and a special character",
    });
  }

  try {
    const user = await Users.findOne({ email: email });

    if (user) {
      res.json({ message: "User already registered!!!" });
      return;
    }

    const hashPassword = await bcrypt.hash(password, 10);

    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
    });

    res.json({ message: "Signup successfuly" });
  } catch (error) {
    res.json(error);
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email) res.json({ message: "Email field is required!" });
  if (!password) res.json({ message: "Password field is required!" });

  try {
    const user = await Users.findOne({ email: email });

    // console.log(user)

    if (!user) {
      res.json({ message: "User not exist!!!" });
      return;
    }

    const check = await bcrypt.compare(password, user.password);

    if (check) {
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "15m" },
      );

      res.json({ message: "Signin successfuly", success: true, user, token });
    } else {
      res.json({ message: "Invalid user!!!" });
    }
  } catch (error) {
    res.json(error);
  }
};
