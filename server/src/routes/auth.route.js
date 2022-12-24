const express = require("express");
const router = express.Router();
const prisma = require("../utils/db");

router.route("/").get(async (req, res) => {
  const users = await prisma.user.findMany();
  console.log("users", users);
  res.send("auth page");
});

module.exports = router;
