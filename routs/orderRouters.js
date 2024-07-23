const express = require('express');
const router = express.Router();
const orderController = require('../controlers/orderController');
const { authenticate } = require('../middleware/authenticateToken');

// Route for creating a new order
router.post('/', authenticate, (req, res) => {
    orderController.createOrder(req, res);
});

// Route for retrieving all orders
router.get('/', authenticate, (req, res) => {
    orderController.getAllOrders(req, res);
});

// Route for updating an order by ID
router.put('/:id', authenticate, (req, res) => {
    orderController.updateOrder(req, res);
});

// Route for deleting an order by ID
router.delete('/:id', authenticate, (req, res) => {
    orderController.deleteOrder(req, res);
});

module.exports = router;