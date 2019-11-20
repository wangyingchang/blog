import { Sequelize } from 'sequelize';

const config = require('./config');

const env: string = process.env.NODE_ENV || 'development';
// 连接mysql数据库
const sequelize = new Sequelize(
      config[env].database,
      config[env].username,
      config[env].password,
      {
        host: config[env].host,
        dialect: config[env].dialect,
        logging: (sql) => {
          console.log(sql);
        },
        timezone: '+08:00'
      }
    );

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
export default sequelize;