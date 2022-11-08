import express, { NextFunction } from "express";
import cors from "cors";
import logger from "morgan";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());

app.use(logger("short"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

import apiRouter from "./modules/index";
app.use("/api", apiRouter);

// health check endpoint
app.get("/status", (req, res) => {
  return res.status(200).json({ success: true, status: "OK" });
});

app.use(function onError(error, req, res, next) {
  const { status = 500 } = error;

  console.log({ url: req.url, body: req.body, error });

  return res.status(status).json({
    error,
  });
});

export default app;
