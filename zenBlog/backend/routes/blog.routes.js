const blogRouter = require("express").Router();
const ctrl = require("../controller/blog.controller");
const { authCheck } = require("../middleware/auth");
const { checkRole } = require("../middleware/role");

blogRouter.post("/create-blog", authCheck, checkRole, ctrl.createBlog);

module.exports = blogRouter;
