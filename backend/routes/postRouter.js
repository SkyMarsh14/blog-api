import { Router } from "express";
import postContoller from "./../controllers/postController.js";

const postRouter = Router();
postRouter.get("/", postContoller.allPosts);

export default postRouter;
