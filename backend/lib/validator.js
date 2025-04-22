import { body } from "express-validator";
import prisma from "../db/prisma";
const validator = {
  user: [
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
        if (user) {
          throw new Error("Username already in use");
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
