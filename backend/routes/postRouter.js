import { Router } from "express";
import postContoller from "./../controllers/postController.js";

const postRouter = Router();
postRouter.get("/", postContoller);

export default postRouter;
