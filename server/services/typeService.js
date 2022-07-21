const { Type } = require("../models/models");

class TypeService {
  async create({ name }) {
    const type = await Type.create({
      name,
    });
    return type;
  }
  async getAll() {
    const type = await Type.findAll();
    return type;
  }
}

module.exports = new TypeService();
