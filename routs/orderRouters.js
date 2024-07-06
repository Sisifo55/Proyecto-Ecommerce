const express = require('express');
const router = express.Router();
const orderController = require('../controlers/orderController');
const { authenticate } = require('../middleware/authenticateToken');

router.post('/', authenticate, orderController.createOrder);
router.get('/', authenticate, orderController.getAllOrders);
router.put('/:id', authenticate, orderController.updateOrder); 
router.delete('/:id', authenticate, orderController.deleteOrder);
module.exports = router;