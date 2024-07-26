const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Order = require('./order'); // Import order model
const Product = require('./product'); // Import product model

const OrderItem = sequelize.define('OrderItem', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true, // Automatically include createdAt and updatedAt
});

OrderItem.belongsTo(Order); // Define relationship with Order (One-to-Many)
OrderItem.belongsTo(Product); // Define relationship with Product (One-to-Many)

module.exports = OrderItem;