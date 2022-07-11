const Router = require("express");
const router = new Router();
const rollController = require("../controllers/rollsController");

router.post("/", rollController.create);
router.get("/", rollController.getAll);
router.get("/:id", rollController.getOne);

module.exports = router;
