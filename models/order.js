const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Product = require('./product'); 

const Order = sequelize.define('Order', {
  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  timestamps: true
});

Order.belongsTo(User);
Order.belongsToMany(Product, { through: 'OrderProducts' });
Product.belongsToMany(Order, { through: 'OrderProducts' });

module.exports = Order;