require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const WebSocket = require("ws");
const devicesController = require("./websockets/devicesWebsocket");
const clientController = require("./websockets/clientWebsocket");

const PORT = process.env.PORT || 9000;
const app = express();

const wssDevices = new WebSocket.Server({ port: 9001 });
const wssClient = new WebSocket.Server({ port: 9002 });

wssDevices.on("connection", devicesController);
wssClient.on("connection", clientController);
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.info("Server listening on port: ", PORT);
});
