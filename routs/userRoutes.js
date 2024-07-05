const express = require('express');
const router = express.Router();
const userController = require('../controlers/userController');
const { authenticate } = require('../middleware/authenticateToken');

// Создание пользователя
router.post('/', userController.createUser);

// Получение всех пользователей
router.get('/', userController.getAllUsers);

module.exports = router;