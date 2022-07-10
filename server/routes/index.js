const Router = require("express");
const router = new Router();
const rollsRouter = require("./rollsRouter");
const typeRouter = require("./typeRouter");
const userRouter = require("./userRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/rolls", rollsRouter);

module.exports = router;
