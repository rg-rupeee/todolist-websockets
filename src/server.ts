import app from "./app";
import * as http from "http";
import init from "./socket";

const port = 5000 || process.env.PORT;

app.set("port", port);

const server = http.createServer(app);

server.on("error", function onError(error) {
  console.log(error);
  throw error;
});

server.on("listening", function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Listening on " + bind);
});

init(server);

server.listen(port);
