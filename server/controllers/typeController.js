const { Type } = require("../models/models");
const ApiError = require("../error/ApiError");
const typeService = require("../services/typeService");
class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await typeService.create({
      name,
    });
    return res.json(type);
  }

  async getAll(req, res) {
    const type = await typeService.getAll();
    return res.json(type);
  }
}

module.exports = new TypeController();
