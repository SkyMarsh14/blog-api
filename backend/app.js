import "dotenv/config";
import express from "express";
import cors from "cors";
import loginRouter from "./routes/loginRouter.js";
import postRouter from "./routes/postRouter.js";
import userRouter from "./routes/userRouter.js";
import "./config/passport.js";
import passport from "passport";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", loginRouter);
app.use("/user", passport.authenticate("jwt", { session: false }), userRouter);
app.use("/posts", passport.authenticate("jwt", { session: false }), postRouter);
app.use("/{*any}", (req, res) => {
  res.status(404).json({
    error: "Resource not found",
    path: req.originalUrl,
    method: req.method,
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
