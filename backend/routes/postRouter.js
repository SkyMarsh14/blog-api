import { Router } from "express";
import commentRouter from "./commentRouter.js";
import postContoller from "./../controllers/postController.js";
import postAuth from "../lib/postAuth.js";
import passport from "passport";

const jwtAuth = passport.authenticate("jwt", { session: false });
const postRouter = Router();
postRouter.get("/", postContoller.get_all);
postRouter.get("/:postId", postContoller.get_post);
postRouter.post("/", jwtAuth, postContoller.create_one);
postRouter.put("/:postId", jwtAuth, postAuth, postContoller.update);
postRouter.delete("/:postId", postAuth, postContoller.delete);
postRouter.use("/:postId/comments", commentRouter);
export default postRouter;
