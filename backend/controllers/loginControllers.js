import validator from "../lib/validator.js";
import { validationResult } from "express-validator";
import prisma from "../db/prisma.js";
const loginController = {
  sign_up_get: async (req, res) => {
    res.json({
      message: "This is a sign-up page.",
    });
  },
  sign_in_get: async (req, res) => {
    res.json({
      message: "Welcome to Sign in page.",
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
      const user = await prisma.user.create({
        data: {
          username: username,
          password: password,
        },
      });
      res.json(user);
    },
  ],
};

export default loginController;
