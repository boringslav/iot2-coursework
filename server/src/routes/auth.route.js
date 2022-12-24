const express = require("express");
const CryptoJS = require("crypto-js");
const router = express.Router();
const prisma = require("../utils/db");

router.route("/sign-up").post(async (req, res) => {
  const { username, password, repeatedPassword } = req.body;

  if (password !== repeatedPassword) {
    return res
      .status(401)
      .send(JSON.stringify({ message: "Password don't match!" }));
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        password: CryptoJS.AES.encrypt(
          password,
          process.env.SECRET_KEY
        ).toString(),
      },
      select: {
        username: true,
        id: true,
      },
    });

    res.status(201).send(JSON.stringify(newUser));
  } catch (e) {
    console.log(e);
    res.status(401).send(JSON.stringify({ message: "User already exists!" }));
  }
});

module.exports = router;
