import validator from "../lib/validator.js";
import { validationResult } from "express-validator";
import prisma from "../db/prisma.js";
import { hashPassword, match } from "../lib/hashPassword.js";
const loginController = {
  sign_up: async (req, res) => {
    res.json({
      message: "This is a sign-up page.",
    });
  },
  sign_in: async (req, res) => {
    res.json({
      message: "Welcome to Sign in page.",
      user,
    });
  },
  validate_login: async (req, res) => {
    const { username, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    const valid = await match(password, user.password);
    if (!user) {
      return res.json({
        message: "Incorrect username.",
      });
    } else if (!valid) {
      return res.json({
        message: "Incorrect password.",
      });
    }
    res.json({
      message: "Welcome " + user.username,
    });
  },
  create_user: [
    validator.user,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      const { username, password } = req.body;
      const hashedPassword = await hashPassword(password);
      const user = await prisma.user.create({
        data: {
          username: username,
          password: hashedPassword,
        },
      });
      res.json(user);
    },
  ],
};

export default loginController;
