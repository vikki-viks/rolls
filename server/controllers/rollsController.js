const uuid = require("uuid");
const path = require("path");
const { Rolls, RollsInfo } = require("../models/models");
const ApiError = require("../error/ApiError");
class RollsController {
  async create(req, res, next) {
    try {
      let { name, typeId, info } = req.body;
      console.log("here");
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));
      const rolls = await Rolls.create({ name, typeId, img: fileName });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          RollsInfo.create({
            title: i.title,
            description: i.description,
            rollsId: rolls.id,
          });
        });
      }
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
      rolls = await Rolls.findAndCountAll({ limit, offset });
    } else {
      rolls = await Rolls.findAndCountAll({ where: { typeId }, limit, offset });
    }
    return res.json(rolls);
  }
  async getOne(req, res) {}
}

module.exports = new RollsController();
