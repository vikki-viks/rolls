const { RollsAmount } = require("../models/models");

class RollsAmountService {
  async create({ id, amount, price }) {
    const rollsAmount = await RollsAmount.create({
      rollId: id,
      amount,
      price,
    });
    return rollsAmount;
  }
}

module.exports = new RollsAmountService();
