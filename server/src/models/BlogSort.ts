// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConnect');
import * as Sequelize from "sequelize";
import sequelize from "../config/dbConnect";

const BlogSort = sequelize.define('BlogSort', {
  blogId: Sequelize.STRING,
  sortId: Sequelize.STRING,
});

module.exports = BlogSort;