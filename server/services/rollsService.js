const { Rolls, RollsInfo } = require("../models/models");

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
}

module.exports = new RollsService();
