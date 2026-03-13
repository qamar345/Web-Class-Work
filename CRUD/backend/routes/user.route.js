const {
  signup,
  signin,
  forgotPassword,
  deleteUser,
} = require("../services/users/user.service");

const userRouter = require("express").Router();

userRouter.post("/api/signup", signup);
userRouter.post("/api/signin", signin);
userRouter.put("/api/forgot-password/:id", forgotPassword);
userRouter.delete("/api/delete-user/:id", deleteUser);

module.exports = userRouter;
