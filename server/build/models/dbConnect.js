"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var config = require('../config/config');
var env = process.env.NODE_ENV || 'development';
// 连接mysql数据库
var sequelize = new sequelize_1.Sequelize(config[env].database, config[env].username, config[env].password, {
    host: config[env].host,
    dialect: config[env].dialect,
    // logging: (sql) => {
    //   sqlLogger.info(sql);
    // },
    timezone: '+08:00'
});
// 验证数据库连接是否成功
sequelize
    .authenticate()
    .then(function () {
    console.log('Connection has been established successfully.');
})
    .catch(function (err) {
    console.error('Unable to connect to the database:', err);
});
module.exports = sequelize;
