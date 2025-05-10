import { Router } from "express";
import loginController from "../controllers/loginControllers.js";

const loginRouter = Router();
loginRouter.post("/sign-up", loginController.create_user);
loginRouter.post("/", loginController.validate_login);

export default loginRouter;
