// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConnect');
import * as Sequelize from "sequelize";
import sequelize from "../config/dbConnect";

const User = sequelize.define('User', {
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  age: Sequelize.INTEGER,
  phone: Sequelize.INTEGER,
  nickname: Sequelize.STRING,
  email: Sequelize.STRING,
  avatar: Sequelize.STRING,
});

module.exports = User;