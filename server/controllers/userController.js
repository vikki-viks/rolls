const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Basket } = require("../models/models");
const userService = require("../services/userService");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};
class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;

    try {
      const token = await userService.registration({
        email,
        password,
        role,
      });
      return res.json({ token });
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    try {
      const token = await userService.logic({
        email,
        password,
      });
      return res.json({ token });
    } catch (e) {
      next(e);
    }
  }

  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  }
}

module.exports = new UserController();
