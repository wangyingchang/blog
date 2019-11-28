'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'wangyingchang',
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '123456',
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 18,
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '18386223128',
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '内向的小刺猬',
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '18386223128@163.com',
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '0',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};