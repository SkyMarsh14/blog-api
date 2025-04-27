import prisma from "../db/prisma.js";
const commentAuth = async (req, res, next) => {
  if (req.user.role === "ADMIN") return next();
  const commentId = parseInt(req.params.commentId);
  const comment = await prisma.comment.findUnique({
    where: {
      id: commentId,
    },
  });
  if (comment === null) {
    throw new Error(
      "Could not find a requested comment with its corresponding id"
    );
  }
  if (comment.authorId === req.user.id) {
    return next();
  }
  throw new Error("Only author of this comment can perfrom this action");
};
export default commentAuth;
