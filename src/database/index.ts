import * as redis from "./redis-handler";
import * as mongodb from "./mongodb-handler";

export const connectDB = async () => {
  await redis.connect();
  await mongodb.connect();
};
