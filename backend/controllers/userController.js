import prisma from "../db/prisma.js";
const userController = {
  index: async (req, res) => {
    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id,
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
};
export default userController;
