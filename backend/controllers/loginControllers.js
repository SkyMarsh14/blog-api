import validator from "../lib/validator.js";
import { validationResult } from "express-validator";
import prisma from "../db/prisma.js";
import { hashPassword, match } from "../lib/hashPassword.js";
import jwt from "jsonwebtoken";
import { Role } from "../generated/prisma/index.js";
const loginController = {
  sign_up: async (req, res) => {
    res.json({
      message: "This is a sign-up page.",
    });
  },
  sign_in: async (req, res) => {
    res.json({
      message: "Welcome to Sign in page.",
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
    const token = jwt.sign(
      { id: user.id, role: user.role, username: user.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    res.json({
      message: "Welcome " + user.username,
      token,
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
      const { username, password, adminPassword } = req.body;
      const hashedPassword = await hashPassword(password);
      if (adminPassword && adminPassword === process.env.ADMIN_PASSWORD) {
        const user = await prisma.user.create({
          data: {
            username,
            password: hashedPassword,
            role: Role.ADMIN,
          },
        });
        return res.json(user);
      }

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
