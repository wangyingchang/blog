// const Sequelize = require('sequelize');
// const sequelize = require('../config/sequelize');
// import * as Sequelize from "sequelize";
// import sequelize from "../config/sequelize";
// const Model = Sequelize.Model;
// class Blog extends Model {}
// Blog.init({
//   // 属性
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   content: {
//     type: Sequelize.TEXT
//     // allowNull 默认为 true
//   },
//   views: {
//     type: Sequelize.INTEGER
//     // allowNull 默认为 true
//   }
// }, {
//   sequelize,
//   modelName: 'blog'
//   // 参数
// });
'use strict';
module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define('Blog', {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        views: DataTypes.INTEGER,
    });
    Blog.associate = function (models) {
        models.Blog.hasOne(models.BlogSort);
    };
    return Blog;
};
