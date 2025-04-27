import prisma from "../db/prisma.js";
const isPostAuthor = async (req, res, next) => {
  const postId = parseInt(req.params.postId, 10);
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });
  if (req.user.id === post.authorId) {
    return next();
  } else {
    throw new Error("Only author os this post can perform this action");
  }
};

export default isPostAuthor;
