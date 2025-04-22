import validator from "../lib/validator";
import { validationResult } from "express-validator";
const loginController = {
  sign_up_get: async (req, res) => {
    res.json();
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
        res.status(400).json({
          errors: errors,
        });
      }
      const { username, password } = req.body;
    },
  ],
};

export default loginController;
