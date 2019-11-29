// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConnect');
import * as Sequelize from "sequelize";
import sequelize from "../config/sequelize";

const Model = Sequelize.Model;

class BlogSort extends Model {}
BlogSort.init({
  blogId: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sortId: {
    type: Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'BlogSort'
});

class Blog extends Model {}
Blog.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT
  },
  views: {
    type: Sequelize.INTEGER
  }
}, {
  sequelize,
  modelName: 'blog'
});


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
BlogSort.hasOne(Blog,{
  foreignKey:'id',
  sourceKey:'blogId'
})
BlogSort.hasOne(Sort,{
  foreignKey:'id',
  sourceKey:'sortId'
})


// const BlogSort = sequelize.define('BlogSort', {
//   blogId: Sequelize.STRING,
//   sortId: Sequelize.STRING,
// });

module.exports = BlogSort 
