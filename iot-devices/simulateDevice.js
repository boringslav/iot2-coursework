const { WebSocket } = require("ws");

const socket = new WebSocket("ws://localhost:9000");

socket.addEventListener("open", () => {
  socket.send("Hello Server");
});

setInterval(() => {
  const temperature = Math.floor(Math.random() * 2 - 1);
  socket.send(JSON.stringify({ waterTemperature: temperature }));
}, 1000);
