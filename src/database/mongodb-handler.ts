import mongoose from "mongoose";
import setupModels from "./../models";

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB: Disconnected");
});

mongoose.connection.on("error", () => {
  console.log("MongoDB: Error connectiong to DB");
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB: Reconnected");
});

mongoose.connection.on("reconnectFailed", () => {
  console.log("MongoDB: Error Reconnecting");
});

const mongoOptions = {};

let connection;
export const connect = async () => {
  try {
    connection = await mongoose.connect(process.env.MONGO_URI, mongoOptions);
    console.log("MongoDB: successfully connected to Database");

    console.log("MongoDB: Models setup successful");
  } catch (err) {
    console.log(err);
  }

  return connection;
};
