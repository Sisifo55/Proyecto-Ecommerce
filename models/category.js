const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product');
const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
});

Category.hasMany(Product, { foreignKey: 'category_id' }); // Define association

module.exports = Category;