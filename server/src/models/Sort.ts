// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConnect');
import * as Sequelize from "sequelize";
import sequelize from "../config/dbConnect";

const Sort = sequelize.define('Sort', {
  name: Sequelize.STRING,
  alias: Sequelize.STRING,
  description: Sequelize.STRING,
  parentId: Sequelize.STRING,
});

module.exports = Sort;