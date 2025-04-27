const isAdmin = (req, res, next) => {
  if (req.user.role === "ADMIN") return next();
  res.status(403).json({
    message: "Forbitten. Only Admin can perform this action.",
  });
};

export default isAdmin;
