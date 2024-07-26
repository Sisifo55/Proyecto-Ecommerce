const express = require('express');
const router = express.Router();
const authController = require('../controlers/authController');;

// User registration route
router.post('/register', authController.register); 

// User login route
router.post('/login', authController.login);

module.exports = router;