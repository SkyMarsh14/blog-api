import "dotenv/config";
import express from "express";
import cors from "cors";
import loginRouter from "./routes/loginRouter.js";
import postRouter from "./routes/postRouter.js";
import "./config/passport.js";
import passport from "passport";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", loginRouter);
app.use("/posts", passport.authenticate("jwt", { session: false }), postRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
