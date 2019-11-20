// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConnect');
import * as Sequelize from "sequelize";
import sequelize from "../config/dbConnect";

const Blog = sequelize.define('Blog', {
  title: Sequelize.STRING,
  content: Sequelize.STRING,
  image: Sequelize.STRING,
  views: Sequelize.INTEGER,
});

module.exports = Blog;