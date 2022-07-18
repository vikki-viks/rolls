const Router = require("express");
const router = new Router();
const rollController = require("../controllers/rollsController");
const checkMiddleware = require("../middleware/checkRoleMiddleware");

router.post("/", checkMiddleware("ADMIN"), rollController.create);
router.get("/", rollController.getAll);
router.get("/:id", rollController.getOne);

module.exports = router;
