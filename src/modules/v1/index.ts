import express from "express";

const router = express.Router();

import taskRouter from "./task/task.route";
router.use("/task", taskRouter);

export default router;
