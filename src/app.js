import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { authRouter, blogRouter, userRouter } from "./routes/index.js";
import { logger } from "./utils/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/auth", authRouter);
app.use("/blog", blogRouter);
app.use("/api/v1/users", userRouter);

app.use((err, req, res, next) => {
  if (err) {
    return res.status(500).send(err.message);
  }
});

export default app;