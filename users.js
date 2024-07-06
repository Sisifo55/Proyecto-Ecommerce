const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../index'); // Импортируйте sequelize из вашего основного файла

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {});

module.exports = User;