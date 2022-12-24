require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const WebSocket = require("ws");
const socketController = require("./websockets");

const PORT = process.env.PORT || 9000;
const app = express();
const server = require("http").createServer(app);

const wss = new WebSocket.Server({ server });
wss.on("connection", socketController);

app.use(cors());
app.use(express.json());
app.use(router);

server.listen(PORT, () => {
  console.info("Server listening on port: ", PORT);
});
