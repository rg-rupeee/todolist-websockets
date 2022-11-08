import app from "./app";
import * as http from "http";

const port = 5000 || process.env.PORT;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function onError(error) {
  console.log(error);
  throw error;
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Listening on " + bind);
}
