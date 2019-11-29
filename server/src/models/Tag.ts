// // const Sequelize = require('sequelize');
// // const sequelize = require('../config/dbConnect');
import * as Sequelize from "sequelize";
import sequelize from "../config/sequelize";

const Model = Sequelize.Model;
class Tag extends Model {}
Tag.init({
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'Tag'
});

// const Tag = sequelize.define('Tag', {
//   name: Sequelize.STRING,
//   description: Sequelize.STRING,
// });

module.exports = Tag;