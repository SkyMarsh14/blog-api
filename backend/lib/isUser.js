const isUser = (req, res, next) => {
  if (req.user.role === "ADMIN") return next();
  const userId = req.params.userId;
  if (userId === req.user.id) {
    return next();
  }
  throw new Error("You cannot modify other user information ");
};
export default isUser;
