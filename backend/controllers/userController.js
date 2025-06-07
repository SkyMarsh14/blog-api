import prisma from "../db/prisma.js";
const userController = {
  index: async (req, res) => {
    const user = await prisma.user.findMany({
      omit: {
        password: true,
      },
      include: {
        comments: true,
        posts: true,
      },
    });

    return res.json({ user });
  },
  get: async (req, res) => {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.userId,
      },
      select: {
        username: true,
        id: true,
        posts: true,
        role: true,
      },
    });
    return res.json({ user });
  },
  update: async (req, res) => {
    const { username, password } = req.body;
    const user = await prisma.user.update({
      where: {
        id: req.params.userId,
      },
      data: {
        username,
        password,
      },
    });
    return res.json({ user });
  },
  update_role: async (req, res) => {
    const { role } = req.body;
    const user = await prisma.user.update({
      where: {
        id: req.params.userId,
      },
      data: {
        role,
      },
    });
    return res.json({ user });
  },
  posts: async (req, res) => {
    const userId = req.user.id;
    const posts = await prisma.post.findMany({
      where: {
        authorId: userId,
      },
    });
    return res.json({ posts });
  },
};
export default userController;
