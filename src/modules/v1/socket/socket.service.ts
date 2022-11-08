// TODO: Setup mongo and redis and replace this with actual client objs
import * as redisClient from "redis";
import { Task } from "../../../models";
const key = "tasks";

export const addNewItem = async (data) => {
  console.log(data);

  // 1. add new item to list -> redis
  await redisClient.RPUSH(key, data);

  // 2. if size of list exceeds 50 then save it in mongoDB
  const tasks = await redisClient.LRANGE(key, 0, -1);
  if (tasks.length > 50) {
    await Task.findOneAndUpdate({ key }, tasks, { upsert: true });

    // 3. flush redis
    redisClient.FLUSHDB(function (err, succeeded) {
      if (succeeded) {
        console.log("flushed DB");
      } else {
        console.log(err);
      }
    });
  }
};
