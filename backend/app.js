import "dotenv/config";
import express from "express";
import loginRouter from "./routes/loginRouter.js";
import postRouter from "./routes/postRouter.js";
const app = express();

app.get("/", (req, res) => res.send("Welcome!"));
app.use("/posts", postRouter);
app.use("/login", loginRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Sever started at ${PORT}`);
});
