import prisma from "../db/prisma.js";
const userController = {
  index: async (req, res) => {
    const user = await prisma.user.findMany({});
    return res.json({ user });
  },
  get: async (req, res) => {
    const user = await prisma.user.findUnique({
      where: {
        id: req.params.userId,
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
  delete: async (req, res) => {
    const deletedUser = await prisma.user.delete({
      where: {
        id: req.params.userId,
      },
    });
    return res.json({ user: deletedUser });
  },
};
export default userController;
