import { Router } from "express";
import loginController from "../controllers/loginControllers.js";

const loginRouter = Router();
loginRouter.get("/sign-up", loginController.sign_up);
loginRouter.post("/sign-up", loginController.create_user);
loginRouter.get("/", loginController.sign_in);
loginRouter.post("/", loginController.validate_login);
loginRouter.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

export default loginRouter;
