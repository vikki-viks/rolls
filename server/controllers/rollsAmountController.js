const ApiError = require("../error/ApiError");
const rollsAmountService = require("../services/rollsAmountService");

class RollsAmountController {
  async create(req, res, next) {
    try {
      let { id, amount, price } = req.body;
      const rollsAmount = await rollsAmountService.create({
        id,
        amount,
        price,
      });
      return res.json(rollsAmount);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
}
module.exports = new RollsAmountController();
