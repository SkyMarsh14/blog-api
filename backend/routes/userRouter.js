import { Router } from "express";
import userController from "../controllers/userController.js";
import isUser from "../lib/isUser.js";
const userRouter = Router();

userRouter.get("/", userController.index);
userRouter.get("/posts", userController.posts);
userRouter.get("/:userId", userController.get);
userRouter.put("/:userId", isUser, userController.update);
userRouter.put("/:userId/role", isUser, userController.update_role);
export default userRouter;
