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
var Sequelize = __importStar(require("sequelize"));
var dbConnect_1 = __importDefault(require("../config/dbConnect"));
var User = dbConnect_1.default.define('User', {
    name: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    phone: Sequelize.INTEGER,
    nickname: Sequelize.STRING,
    email: Sequelize.STRING,
    avatar: Sequelize.STRING,
});
module.exports = User;
