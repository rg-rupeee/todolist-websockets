import express from "express";
import taskController from "./task.controller";

const router = express.Router();

router.get("/fetchAllTasks", taskController.fetchAllTasks);

export default router;
