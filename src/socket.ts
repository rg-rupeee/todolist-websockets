import { Server } from "socket.io";
import { addNewItem } from "./modules/v1/socket/socket.service";

function init(server) {
  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("add", addNewItem);
  });
}

export default init;
