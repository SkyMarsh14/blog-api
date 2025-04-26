const isAuthor = (req, res, next) => {
  try {
    if (req.user.role === "AUTHOR") {
      return next();
    }
    res.status(403).json({
      message: "Only authors can perform this action",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error checking authorization",
    });
  }
};

export default isAuthor;
