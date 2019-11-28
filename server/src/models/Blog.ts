// const Sequelize = require('sequelize');
// const sequelize = require('../config/sequelize');
import * as Sequelize from "sequelize";
import sequelize from "../config/sequelize";


const Model = Sequelize.Model;
class Blog extends Model {}

Blog.init({
  // 属性
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT
    // allowNull 默认为 true
  },
  views: {
    type: Sequelize.INTEGER
    // allowNull 默认为 true
  }
}, {
  sequelize,
  modelName: 'blog'
  // 参数
});


const BlogSort = require('./BlogSort')
Blog.hasMany(BlogSort,{foreignKey:'blogId'})

// const Blog = sequelize.define('Blog', {
//   title: Sequelize.STRING,
//   content: Sequelize.TEXT,
//   views: Sequelize.INTEGER,
// });

module.exports = Blog;