const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketRolls = sequelize.define("basket_rolls", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Rolls = sequelize.define("roll", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define("roll", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const RollsAmount = sequelize.define("rolls_amount", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  amount: { type: DataTypes.INTEGER, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const RollsInfo = sequelize.define("roll_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

User.hasOne(Basket);
Basket.belongsTo(User);

Basket.hasMany(BasketRolls);
BasketRolls.belongsTo(Basket);

Rolls.hasMany(BasketRolls);
BasketRolls.belongsTo(Rolls);

User.hasMany(Rating);
Rating.belongsTo(User);

Type.hasMany(Rolls);
Rolls.belongsTo(Type);

Rolls.hasMany(Rating);
Rating.belongsTo(Rolls);

Rolls.hasMany(RollsInfo);
RollsInfo.belongsTo(Rolls);

Rolls.hasMany(RollsInfo);
RollsInfo.belongsTo(Rolls);

Rolls.hasMany(RollsInfo);
RollsInfo.belongsTo(Rolls);

Rolls.hasMany(RollsAmount);
RollsAmount.belongsTo(Rolls);

module.exports = {
  User,
  Basket,
  BasketRolls,
  Rolls,
  Type,
  Rating,
  RollsInfo,
  RollsAmount,
};
