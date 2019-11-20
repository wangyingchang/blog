// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConnect');
import * as Sequelize from "sequelize";
import sequelize from "../config/dbConnect";

const BlogTag = sequelize.define('BlogTag', {
  blogId: Sequelize.STRING,
  tagId: Sequelize.STRING,
});

module.exports = BlogTag;