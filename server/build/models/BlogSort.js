"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const Sequelize = require('sequelize');
// const sequelize = require('../config/dbConnect');
const Sequelize = __importStar(require("sequelize"));
const sequelize_1 = __importDefault(require("../config/sequelize"));
// const BlogSort = sequelize.define('BlogSort', {
//   blogId: Sequelize.STRING,
//   sortId: Sequelize.STRING,
// });
const Model = Sequelize.Model;
class BlogSort extends Model {
}
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
    sequelize: sequelize_1.default,
    modelName: 'BlogSort'
    // 参数
});
const Blog = require('./Blog');
BlogSort.belongsTo(Blog);
module.exports = BlogSort;
