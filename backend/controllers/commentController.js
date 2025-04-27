import prisma from "../db/prisma.js";
const commentController = {
  index: async (req, res) => {
    const postId = parseInt(req.params.postId, 10);
    try {
      const comments = await prisma.comment.findMany({
        where: {
          postId,
        },
      });
      return res.json({ comments });
    } catch (err) {
      throw new Error(err);
    }
  },
  post: async (req, res) => {
    const content = req.body.content;
    const authorId = req.user.id;
    const postId = parseInt(req.params.postId, 10);
    const comment = await prisma.comment.create({
      data: {
        content,
        authorId,
        postId,
      },
    });
    return res.json({ comment });
  },
  delete_by_postId: async (req, res) => {
    const deletedComments = await prisma.comment.deleteMany({
      where: {
        postId: parseInt(req.params.postId, 10),
      },
    });
    return res.json({ deletedComments });
  },
  get: async (req, res) => {
    const { commentId } = req.params;
    try {
      const comment = await prisma.comment.findUnique({
        where: {
          id: parseInt(commentId, 10),
        },
      });
      return res.json({ comment });
    } catch (err) {
      throw new Error(err);
    }
  },
  delete: async (req, res) => {
    const deleted = await prisma.comment.delete({
      where: {
        id: parseInt(req.params.commentId, 10),
      },
    });
    return res.json(deleted);
  },
  update: async (req, res) => {
    const { content } = req.body;
    const comment = await prisma.comment.update({
      where: {
        id: parseInt(req.params.commentId, 10),
      },
      data: {
        content,
      },
    });
    return res.json(comment);
  },
};

export default commentController;
