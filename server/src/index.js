require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.info("App listening on port: ", PORT);
});
