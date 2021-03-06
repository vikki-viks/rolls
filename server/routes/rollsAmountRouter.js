const Router = require("express");
const router = new Router();
const rollAmountController = require("../controllers/rollsAmountController");
const checkMiddleware = require("../middleware/checkRoleMiddleware");

router.post("/", rollAmountController.create);

module.exports = router;
