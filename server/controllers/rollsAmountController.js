const { RollsAmount } = require("../models/models");
const ApiError = require("../error/ApiError");
const { model } = require("../db");

class RollsAmountController {
  async create(req, res, next) {
    try {
      let { id, amount, price } = req.body;
      const rollsAmount = await RollsAmount.create({
        rollId: id,
        amount,
        price,
      });
      return res.json(rollsAmount);
    } catch (e) {
      console.log(e);
      next(ApiError.badRequest(e.message));
    }
  }
}
module.exports = new RollsAmountController();
