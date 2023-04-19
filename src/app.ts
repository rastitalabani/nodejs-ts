import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import Router from "./routes/index";

dotenv.config({
  path:
    process.env.NODE_ENV === "production"
      ? "./dotenv/.prod.env"
      : "./dotenv/.dev.env",
});

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", Router);

export default app;
