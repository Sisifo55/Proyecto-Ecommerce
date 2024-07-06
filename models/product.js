const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./category'); 
const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.NUMBER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id'
    }
  },
}, {
  // Добавляем опции для автоматического управления временными метками
  timestamps: true,
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
});

Product.belongsTo(Category);
Category.hasMany(Product);

module.exports = Product;