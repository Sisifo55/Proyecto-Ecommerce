// Import the Order model from '../models/order'
const Order = require('../models/order');
const users = require('../models/user')

// Create a new order
exports.createOrder = async (req, res) => {
    const { userId, status } = req.body;

    try {
        const newOrder = await Order.create({ userId, status });
        res.status(201).json({ message: 'Order created', order: newOrder });
    } catch (err) {
        res.status(500).json({ message: 'Error creating order', error: err.message });
    }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json({ orders });
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving orders', error: err.message });
    }
};

// Update an order by ID
exports.updateOrder = async (req, res) => {
    const { id } = req.params;
    const { userId, status } = req.body;

    try {
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        order.userId = userId;
        order.status = status;
        await order.save();

        res.status(200).json({ message: 'Order updated', order });
    } catch (err) {
        res.status(500).json({ message: 'Error updating order', error: err.message });
    }
};

// Delete an order by ID
exports.deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        await order.destroy();
        res.status(200).json({ message: 'Order deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting order', error: err.message });
    }
};