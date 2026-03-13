const authRouter = require("express").Router();
const ctrl = require("../controller/auth.controller");

authRouter.post("/signup", ctrl.signup);
authRouter.post("/signin", ctrl.signin);

module.exports = authRouter;
