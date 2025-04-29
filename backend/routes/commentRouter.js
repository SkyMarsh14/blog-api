import { Router } from "express";
import commentAuth from "../lib/commentAuth.js";
import commentController from "../controllers/commentController.js";
import isAdmin from "../lib/isAdmin.js";
import passport from "passport";
const jwtAuth = passport.authenticate("jwt", { session: false });
const commentRouter = Router({ mergeParams: true });
commentRouter.get("/", commentController.index);
commentRouter.delete("/", isAdmin, commentController.delete_by_postId);
commentRouter.post("/", jwtAuth, commentController.post);
commentRouter.get("/:commentId", commentController.get);
commentRouter.delete(
  "/:commentId",
  jwtAuth,
  commentAuth,
  commentController.delete
);
commentRouter.put(
  "/:commentId",
  jwtAuth,
  commentAuth,
  commentController.update
);
export default commentRouter;
