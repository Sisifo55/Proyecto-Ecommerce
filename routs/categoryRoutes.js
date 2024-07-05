const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/', authenticate, categoryController.createCategory);
router.put('/:id', authenticate, categoryController.updateCategory);
router.delete('/:id', authenticate, categoryController.deleteCategory);
router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategoryById);

module.exports = router;
