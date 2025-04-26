import { Router } from "express";
import userController from "../controllers/userController.js";
const userRouter = Router();

userRouter.get("/", userController.index);
userRouter.get("/:userId", userController.get);
userRouter.put("/:userId", userController.update);
userRouter.put("/:userId/role", userController.update_role);
userRouter.delete("/:userId", userController.delete);
export default userRouter;
