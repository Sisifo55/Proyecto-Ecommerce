const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // добавляем timestamps поля createdAt и updatedAt
});

module.exports = Category;

