// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConnect');
import * as Sequelize from "sequelize";
import sequelize from "../config/sequelize";

const Model = Sequelize.Model;

class Sort extends Model {}
Sort.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'Sort'

});

// const Sort = sequelize.define('Sort', {
//   name: Sequelize.STRING,
//   description: Sequelize.STRING,
// });

module.exports = Sort;