const express = require('express');
const router = express.Router();
const userController = require('../controlers/userController');
const { authenticate } = require('../middleware/authenticateToken');

// Create a new user
router.post('/', userController.createUser);
// Get all users
router.get('/', userController.getAllUsers);
// Update a user by ID
router.put('/:id', userController.updateUser);
// Delete a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;