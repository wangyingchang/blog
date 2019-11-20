// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConnect');
import * as Sequelize from "sequelize";
import sequelize from "../config/dbConnect";

const Tag = sequelize.define('Tag', {
  name: Sequelize.STRING,
  alias: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = Tag;