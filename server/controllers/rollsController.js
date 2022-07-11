const { Rolls } = require("../models/models");
const uuid = require("uuid");
const ApiErrpr = require("../error/ApiError");
class RollsController {
  async create(req, res) {
    const { name, rating, typeId } = req.body;
    const { img } = req.file;
    let fileName = uuid.v4() + ".jpg";
    const rolls = await Rolls.create({ name });
    return res.json(rolls);
  }
  async getAll(req, res) {
    const rolls = await Rolls.findAll();
    return res.json(rolls);
  }
  async getOne(req, res) {}
}

module.exports = new RollsController();
