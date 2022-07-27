const ApiError = require("../error/ApiError");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Basket, User } = require("../models/models");

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};
class UserService {
  async registration({ email, password, role }) {
    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      throw ApiError.badRequest("Пользователь с таким email уже существует");
    }

    if (!email || !password) {
      throw ApiError.badRequest("Неверный email или пароль");
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ email, role, password: hashPassword });
    const basket = await Basket.create({ userId: user.id });
    const token = generateJwt(user.id, user.email, user.role);
    return token;
  }

  async logic({ email, password }) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw ApiError.internal("Пользователь не найден");
    }
    const comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      throw ApiError.internal("Указан неверный пароль");
    }
    const token = generateJwt(user.id, user.email, user.role);
    return token;
  }
}

module.exports = new UserService();
