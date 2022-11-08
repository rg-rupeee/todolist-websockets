// TODO: Setup mongo and redis and replace this with actual client objs
import * as redisClient from "redis";
import { Task } from "../../../models";
const key = "tasks";

const fetchAllTasks = async () => {
  // 1. fetch data from mongodb
  const DBtasks = await Task.findOne({ key });
  // 2. fetch data from redis
  const tasks = await redisClient.LRANGE(key, 0, -1);
  // 3. append both and return
  const result = [...DBtasks.tasks, ...tasks];

  return result;
};

export default {
  fetchAllTasks,
};
