import prisma from "../db/prisma.js";
const userController = {
  index: async (req, res) => {
    const user = await prisma.user.findMany({
      orderBy: [{ id: "asc" }],
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
    const userId = Number(req.params.userId);
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
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
        id: Number(req.params.userId),
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
    const userId = Number(req.params.userId);
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role,
      },
    });
    return res.json({ user });
  },
  posts: async (req, res) => {
    const userId = Number(req.user.id);
    const posts = await prisma.post.findMany({
      where: {
        authorId: userId,
      },
    });
    return res.json({ posts });
  },
  delete: async (req, res) => {
    const userId = Number(req.params.userId);
    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    return res.json({ user });
  },
};
export default userController;
