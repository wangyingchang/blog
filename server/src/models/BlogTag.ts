// // const Sequelize = require('sequelize');
// // const sequelize = require('../config/sequelize');
import * as Sequelize from "sequelize";
import sequelize from "../config/sequelize";

const Model = Sequelize.Model;
class BlogTag extends Model {}
BlogTag.init({
  blogId: {
    type: Sequelize.STRING,
  },
  tagId: {
    type: Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'BlogTag'
});

// const BlogTag = sequelize.define('BlogTag', {
//   blogId: Sequelize.STRING,
//   tagId: Sequelize.STRING,
// });

module.exports = BlogTag;