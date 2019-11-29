// const Sequelize = require('sequelize');
// const sequelize = require('../config/sequelize');
import * as Sequelize from "sequelize";
import sequelize from "../config/sequelize";

const Model = Sequelize.Model;

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
  modelName: 'Blog'
});

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

Blog.belongsToMany(Sort, { through: BlogSort , foreignKey: 'blogId', otherKey: 'sortId' })
Blog.belongsToMany(Tag, { through: BlogTag , foreignKey: 'blogId', otherKey: 'tagId' })

module.exports = Blog;
