exports.checkRole = (req, res, next) => {
  const userRole = req.user.role;

  if (userRole === "admin" || userRole === "author") {
    next();
  } else {
    res.status(403).json({ message: "Access denied!!!" });
  }
};
