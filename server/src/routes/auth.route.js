const express = require("express");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const router = express.Router();
const prisma = require("../utils/db");

router.post("/sign-up", async (req, res) => {
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

router.post("/sign-in", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new Error("Invalid credentials!");
    }

    const decrypted = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    if (decrypted !== password) {
      throw new Error("Invalid credentials");
    }

    const accessToken = jwt.sign(
      {
        id: user.id,
        username: user.username,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" }
    );

    res.status(200).send(JSON.stringify({ accessToken }));
  } catch (e) {
    res.status(401).send(JSON.stringify({ message: e.message }));
  }
});
module.exports = router;
