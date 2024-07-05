
const express = require('express');
const router = express.Router();
const productController = require('../controlers/productController');
const { authenticate } = require('../middleware/authenticateToken');

// Create a product - POST request
router.post('/', productController.createProduct);

// Get all products - GET request
router.get('/', productController.getAllProducts);

// Get a product by ID - GET request
router.get('/:id', productController.getProductById);

// Update a product by ID - PUT request
router.put('/:id', productController.updateProduct);

// Delete a product by ID - DELETE request
router.delete('/:id', productController.deleteProduct);

module.exports = router;

