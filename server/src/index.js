require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const WebSocket = require("ws");

const PORT = process.env.PORT || 9000;
const app = express();
const server = require("http").createServer(app);

/**
 * Websocket server
 */
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.info("A new user connected!");
  ws.send("The device is successfully connected!");

  ws.on("message", (message) => {
    const devicesData = JSON.parse(message);
    console.info(devicesData);
  });
});

app.use(cors());
app.use(express.json());
app.use(router);

server.listen(PORT, () => {
  console.info("Server listening on port: ", PORT);
});
