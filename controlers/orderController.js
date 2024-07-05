const Order = require('../models/order');
const Product = require('../models/product');
const User = require('../models/user');

exports.createOrder = async (req, res) => {
  const { products, total } = req.body;
  if (!products || !total) {
    return res.status(400).json({ message: 'Products and total are required' });
  }

  try {
    const order = await Order.create({ total, UserId: req.user.id });
    await order.addProducts(products);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { UserId: req.user.id },
      include: Product
    });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
