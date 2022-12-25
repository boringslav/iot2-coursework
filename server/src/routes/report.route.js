const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const filePath = path.join(__dirname, "../websockets/report.json");
    console.log("File Path: ", filePath);
    res.status(200).sendFile(filePath);
  } catch (e) {
    res
      .status(404)
      .send(JSON.stringify({ message: "File not available!", e: e.message }));
  }
});

module.exports = router;
