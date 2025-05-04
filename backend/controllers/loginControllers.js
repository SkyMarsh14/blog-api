import validator from "../lib/validator.js";
import { validationResult } from "express-validator";
import prisma from "../db/prisma.js";
import { hashPassword, match } from "../lib/hashPassword.js";
import jwt from "jsonwebtoken";
import { Role } from "../generated/prisma/index.js";
const sign_up_validator = validator.user.concat(validator.admin);
const loginController = {
  validate_login: [
    validator.login,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      const user = await prisma.user.findUnique({
        where: {
          username: req.body.username,
        },
      });
      const valid = await match(req.body.password, user.password);
      if (!valid) {
        return res.json({
          errors: [{ msg: "Incorrect password.", path: "password" }],
        });
      }
      const token = jwt.sign(
        { id: user.id, role: user.role, username: user.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
      );
      res.json({
        token,
      });
    },
  ],
  create_user: [
    sign_up_validator,
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      const { username, password, adminPassword } = req.body;
      const hashedPassword = await hashPassword(password);
      if (adminPassword) {
        const user = await prisma.user.create({
          data: {
            username,
            password: hashedPassword,
            role: Role.ADMIN,
          },
        });
        return res.json({
          user,
        });
      }

      const user = await prisma.user.create({
        data: {
          username: username,
          password: hashedPassword,
        },
      });
      res.json({ user });
    },
  ],
};

export default loginController;
