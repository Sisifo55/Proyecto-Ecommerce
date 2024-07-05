const express = require('express');
const router = express.Router();
const authController = require('../controlers/authController');;

// Авторизация пользователя
router.post('/register', authController.register); // должно быть определено в authController
router.post('/login', authController.login);


module.exports = router;