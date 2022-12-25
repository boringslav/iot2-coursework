const fs = require("fs");
const path = require("path");
const reportFilePath = path.join(`${__dirname}/report.json`);

module.exports = (ws) => {
  console.info("A new user connected!");
  ws.send("The device is successfully connected!");

  ws.on("message", (message) => {
    let jsonFileData = JSON.parse(fs.readFileSync(reportFilePath));
    const devicesData = JSON.parse(message);
    jsonFileData[Date.now()] = devicesData;
    fs.writeFileSync(reportFilePath, JSON.stringify(jsonFileData));
  });

  ws.on("error", (e) => {
    console.error("Websocket error", e);
  });
};
