"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');
// import * as Sequelize from "sequelize";
// import sequelize from "../config/sequelize";
const Model = Sequelize.Model;
class Blog extends Model {
}
exports.Blog = Blog;
class BlogSort extends Model {
}
exports.BlogSort = BlogSort;
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
//const BlogSort = require('./BlogSort')
BlogSort.init({
    // 属性
    blogId: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sortId: {
        type: Sequelize.STRING
    },
}, {
    sequelize,
    modelName: 'blogSort'
    // 参数
});
Blog.hasMany(BlogSort, { foreignKey: 'blogId' });
BlogSort.belongsTo(Blog, { foreignKey: 'id' });
// const Blog = sequelize.define('Blog', {
//   title: Sequelize.STRING,
//   content: Sequelize.TEXT,
//   views: Sequelize.INTEGER,
// });
//module.exports = Blog;
