const Router = require("express");
const router = new Router();
const rollsRouter = require("./rollsRouter");
const typeRouter = require("./typeRouter");
const userRouter = require("./userRouter");
const rollsAmountRouter = require("./rollsAmountRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/rolls", rollsRouter);
router.use("/amount", rollsAmountRouter);

module.exports = router;
