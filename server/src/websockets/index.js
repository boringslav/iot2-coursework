module.exports = (ws) => {
  console.info("A new user connected!");
  ws.send("The device is successfully connected!");

  ws.on("message", (message) => {
    const devicesData = JSON.parse(message);
    console.info(devicesData);
  });
};
