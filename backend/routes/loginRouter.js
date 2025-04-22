import { Router } from "express";
import loginController from "../controllers/loginControllers.js";

const loginRouter = Router();
loginRouter.get("/sign-up", loginController.sign_up_get);
loginRouter.post("/sign-up", loginController.create_user);
loginRouter.get("/", loginController.sign_in_get);

export default loginRouter;
