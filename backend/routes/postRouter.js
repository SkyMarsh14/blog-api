import { Router } from "express";
import postContoller from "./../controllers/postController.js";
const postRouter = Router();
postRouter.get("/", postContoller.get_all);
postRouter.get("/:postId", postContoller.get_post);
postRouter.post("/", postContoller.create_one);
postRouter.put("/:postId", postContoller.update);
postRouter.delete("/:postId", postContoller.delete);

export default postRouter;
