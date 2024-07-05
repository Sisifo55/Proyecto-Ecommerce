const express = require('express');
const router = express.Router();
const orderController = require('../controlers/orderController');
const { authenticate } = require('../middleware/authenticateToken');

router.post('/', authenticate, orderController.createOrder);
router.get('/', authenticate, orderController.getAllOrders);

module.exports = router;