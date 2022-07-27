const { Rolls, RollsInfo, RollsAmount } = require("../models/models");
const mapper = require("../utils/mapper");

class RollsService {
  async create({ name, typeId, info, img }) {
    const rolls = await Rolls.create({ name, typeId, img });

    if (!info) {
      return rolls;
    }

    info.forEach((i) => {
      RollsInfo.create({
        title: i.title,
        description: i.description,
        rollsId: rolls.id,
      });
    });

    return rolls;
  }
  async getAll({ limit, typeId, page }) {
    page = page || 1;
    limit = limit || 9;
    const offset = page * limit - limit;
    let rolls;
    if (!typeId) {
      rolls = await Rolls.findAndCountAll({
        limit,
        offset,
        include: [{ model: RollsAmount }],
      });
    } else {
      rolls = await Rolls.findAndCountAll({ where: { typeId }, limit, offset });
    }
    console.log(JSON.stringify(rolls, null, 2));
    const mappedRolls = mapper(rolls);
    return mappedRolls;
  }
  async getOne({ id }) {
    const rolls = await Rolls.findOne({
      where: { id },
      include: [{ model: RollsInfo, as: "info" }],
    });
    return rolls;
  }
}

module.exports = new RollsService();
