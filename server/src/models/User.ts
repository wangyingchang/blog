// // const Sequelize = require('sequelize');
// // const sequelize = require('../config/dbConnect');
import * as Sequelize from "sequelize";
import sequelize from "../config/sequelize";

const Model = Sequelize.Model;

class User extends Model {}
User.init({
  name: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  phone: {
    type: Sequelize.INTEGER
  },
  nickname: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  avatar: {
    type: Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'User'
});

// const User = sequelize.define('User', {
//   name: Sequelize.STRING,
//   password: Sequelize.STRING,
//   age: Sequelize.INTEGER,
//   phone: Sequelize.INTEGER,
//   nickname: Sequelize.STRING,
//   email: Sequelize.STRING,
//   avatar: Sequelize.STRING,
// });

module.exports = User;