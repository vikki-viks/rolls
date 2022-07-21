const { Type } = require("../models/models");

class TypeService {
  async create({ name }) {
    const type = await TypeService.create({
      name,
    });
    return type;
  }
  async getAll() {
    const type = await TypeService.findAll();
    return type;
  }
}

module.exports = new TypeService();
