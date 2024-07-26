const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user'); // Import user model

const Order = sequelize.define('Order', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
  userId: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  status: {
      type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
      defaultValue: 'pending'
  }
}, {
  tableName: 'orders',
  timestamps: true, 
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

module.exports = { Order };