const router = require("express").Router();
const authRouter = require("./auth.route");
const reportRouter = require("./report.route");

router.use("/auth/", authRouter);
router.use("/report/", reportRouter);
module.exports = router;
