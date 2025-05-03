import { body } from "express-validator";
import prisma from "../db/prisma.js";
const validator = {
  user: [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username field is required.")
      .isLength({ min: 3, max: 20 })
      .withMessage("Username must be between 3 to 20 characters.")
      .custom(async (username) => {
        const user = await prisma.user.findFirst({
          where: {
            username: username,
          },
        });
        if (user) {
          throw new Error("Username already in use.");
        }
        return true;
      }),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password field is required.")
      .isLength({ min: 3, max: 30 })
      .withMessage("Password must be between 3 to 30 letters."),
  ],
  admin: [
    body("adminPassword")
      .trim()
      .optional({ nullable: true })
      .custom(async (adminPassword) => {
        if (adminPassword && adminPassword !== process.env.ADMIN_PASSWORD) {
          throw new Error("Incorrect admin password.");
        }
        return true;
      }),
  ],
  login: [
    body("username")
      .trim()
      .notEmpty()
      .withMessage("Username field is required.")
      .isLength({ min: 3, max: 20 })
      .withMessage("Username must be between 3 to 20 characters.")
      .custom(async (username) => {
        const user = await prisma.user.findUnique({
          where: {
            username: username,
          },
        });
        if (!user) {
          throw new Error("User not found.");
        }
        return true;
      }),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password field is required.")
      .isLength({ min: 3, max: 30 })
      .withMessage("Password must be between 3 to 30 letters."),
  ],
};
export default validator;
