"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config = require('./config');
const env = process.env.NODE_ENV || 'development';
// 连接mysql数据库
const sequelize = new sequelize_1.Sequelize(config[env].database, config[env].username, config[env].password, {
    host: config[env].host,
    dialect: config[env].dialect,
    logging: (sql) => {
        console.log(sql);
    },
    timezone: '+08:00'
});
// 验证数据库连接是否成功
sequelize
    .authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
})
    .catch(err => {
    console.error('Unable to connect to the database:', err);
});
// module.exports = sequelize;
exports.default = sequelize;
