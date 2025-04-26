import prisma from "../db/prisma.js";
const postContoller = {
  get_all: async (req, res) => {
    const posts = await prisma.post.findMany();
    res.json({ message: "Welcome to posts route", posts });
  },
  get_post: async (req, res) => {
    const postId = Number(req.params.postId);
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    res.json({ post });
  },
  create_one: async (req, res) => {
    const { title, content } = req.body;
    try {
      const post = await prisma.post.create({
        data: {
          title: title,
          content: content,
          authorId: req.user.id,
        },
      });
      return res.json({ post });
    } catch (err) {
      throw new Error(err);
    }
  },
  update: async (req, res) => {
    const { title, content } = req.body;
    try {
      const post = await prisma.post.update({
        where: {
          id: parseInt(req.params.postId, 10),
          authorId: req.user.id,
        },
        data: {
          title,
          content,
        },
      });
      return res.json({ post });
    } catch (err) {
      throw new Error(err);
    }
  },
  delete: async (req, res) => {
    try {
      const deletedPost = await prisma.post.delete({
        where: {
          id: parseInt(req.params.postId, 10),
          authorId: req.user.id,
        },
      });
      return res.json({ deletedPost });
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default postContoller;
