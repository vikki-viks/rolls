const uuid = require("uuid");
const path = require("path");
const { Rolls, RollsInfo, RollsAmount } = require("../models/models");
const ApiError = require("../error/ApiError");
const mapper = require("../utils/mapper");
const rollsService = require("../services/rollsService");

class RollsController {
  async create(req, res, next) {
    try {
      let { name, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const rolls = await rollsService.create({
        name,
        typeId,
        info: info ? JSON.parse(info) : undefined,
        img: fileName,
      });

      return res.json(rolls);
    } catch (e) {
      console.log(e);
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    let { typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
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
    return res.json(mappedRolls);
  }
  async getOne(req, res) {
    const { id } = req.params;
    const rolls = await Rolls.findOne({
      where: { id },
      include: [{ model: RollsInfo, as: "info" }],
    });
    return res.json(rolls);
  }
}

module.exports = new RollsController();
