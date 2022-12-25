const fs = require("fs");
const path = require("path");
const currentDataFilePath = path.join(`${__dirname}/currentData.json`);

module.exports = (ws) => {
  console.info("A new user connected!");
  setInterval(() => {
    const currentData = JSON.parse(fs.readFileSync(currentDataFilePath));
    ws.send(JSON.stringify(currentData));
  }, 4000);
};
