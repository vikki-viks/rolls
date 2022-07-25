const uuid = require("uuid");
const path = require("path");
const ApiError = require("../error/ApiError");
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
    console.log("work2");
    const mappedRolls = await rollsService.getAll({
      typeId,
      limit,
      page,
    });
    return res.json(mappedRolls);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const rolls = await rollsService.getOne({
      id,
    });
    return res.json(rolls);
  }
}

module.exports = new RollsController();
