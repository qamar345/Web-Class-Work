const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.authCheck = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    res.json({ message: "Invalid token!!!" });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.json({ message: "Authentication failed!!!" });
    }

    req.user = user;
    next();
  });
};
