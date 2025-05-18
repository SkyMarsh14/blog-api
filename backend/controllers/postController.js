import prisma from "../db/prisma.js";
const postContoller = {
  get_all: async (req, res) => {
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        author: {
          select: {
            username: true,
          },
        },
      },
    });
    res.json({ posts });
  },
  get_post: async (req, res) => {
    const postId = Number(req.params.postId);
    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      include: {
        author: {
          select: {
            username: true,
          },
        },
        Comment: {
          include: {
            author: {
              select: {
                id: true,
                username: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
    res.json({ post });
  },
  create_one: async (req, res) => {
    const { title, content, published } = req.body;
    try {
      const post = await prisma.post.create({
        data: {
          title,
          content,
          authorId: req.user.id,
          published,
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
    const postId = parseInt(req.params.postId, 10);
    try {
      const deleteComments = await prisma.comment.deleteMany({
        where: {
          postId,
        },
      });
      const deletedPost = await prisma.post.delete({
        where: {
          id: postId,
        },
      });
      return res.json({ deletedPost });
    } catch (err) {
      throw new Error(err);
    }
  },
};

export default postContoller;
