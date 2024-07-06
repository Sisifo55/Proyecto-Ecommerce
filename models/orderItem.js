const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Product = require('./product');
const Order = require('./order');

const OrderItem = sequelize.define('OrderItem', {
  orderId: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'id'
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: 'id'
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });

module.exports = OrderItem;
