// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConnect');
import * as Sequelize from "sequelize";
import sequelize from "../config/sequelize";

// const BlogSort = sequelize.define('BlogSort', {
//   blogId: Sequelize.STRING,
//   sortId: Sequelize.STRING,
// });

const Model = Sequelize.Model;
class BlogSort extends Model {}

BlogSort.init({
  // 属性
  blogId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sortId: {
    type: Sequelize.STRING
    // allowNull 默认为 true
  },
}, {
  sequelize,
  modelName: 'BlogSort'
  // 参数
});

const Blog = require('./Blog')

BlogSort.belongsTo(Blog,{foreignKey: 'id'})

module.exports = BlogSort;