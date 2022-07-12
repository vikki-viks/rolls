const uuid = require("uuid");
const path = require("path");
const { Rolls } = require("../models/models");
const ApiError = require("../error/ApiError");
class RollsController {
  async create(req, res, next) {
    try {
      const { name, typeId } = req.body;
      console.log("here");
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const rolls = await Rolls.create({ name, typeId, img: fileName });
      return res.json(rolls);
    } catch (e) {
      console.log(e);
      next(ApiError.badRequest(e.message));
    }
  }
  async getAll(req, res) {
    const rolls = await Rolls.findAll();
    return res.json(rolls);
  }
  async getOne(req, res) {}
}

module.exports = new RollsController();
