import prisma from "../db/prisma.js";
const commentController = {
  index: async (req, res) => {
    const postId = req.params.postId;
    try {
      const comments = await prisma.post.findUnique({
        where: {
          id: postId,
        },
        include: {
          authorId: true,
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
    const comment = await prisma.comment.create({
      data: {
        content,
        authorId,
      },
    });
    return res.json({ comment });
  },
  delete_by_postId: async (req, res) => {
    const deletedComments = await prisma.comment.deleteMany({
      where: {
        postId: req.params.postId,
      },
    });
    return res.json({ deletedComments });
  },
  get: async (req, res) => {
    const { postId, commentId } = req.params;
    try {
      const comment = await prisma.comment.findUnique({
        where: {
          id: commentId,
        },
      });
      return res.json({ comment });
    } catch (err) {
      throw new Error(err);
    }
  },
  post: async (req, res) => {},
  delete: async (req, res) => {
    const deleted = await prisma.comment.delete({
      where: {
        id: req.params.commentId,
      },
    });
    return res.json(deleted);
  },
  update: async (req, res) => {
    const { content } = req.body;
    const comment = await prisma.comment.update({
      where: {
        id: req.params.commentId,
      },
      data: {
        content,
      },
    });
    return res.json(comment);
  },
};

export default commentController;
