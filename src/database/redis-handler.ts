import { createClient } from "redis";

const connectionOptions = {};

export const connect = async () => {
  try {
    const redisClient = createClient(connectionOptions);

    redisClient.connect();

    redisClient.on("connect", () => {
      console.log("redis connected");
    });

    redisClient.on("ready", () => {
      console.log("redis ready state");
    });

    redisClient.on("reconnecting", () => {
      console.log("redis reconnecting");
    });

    redisClient.on("error", (error) => {
      console.log("redis connection failed");
      console.log(error);
    });

    redisClient.on("end", () => {
      console.log("redis connection closed");
    });
  } catch (err) {
    console.log(err);
  }
};
