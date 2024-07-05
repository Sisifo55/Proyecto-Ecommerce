const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./category'); 

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Product.belongsTo(Category);
Category.hasMany(Product);

module.exports = Product;

