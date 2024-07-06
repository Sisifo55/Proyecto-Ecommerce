const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Create a product - POST request
router.post('/', async (req, res) => {
    try {
      const { id, name, price, category_id } = req.body;
  
      if (!id || !name || !price || !category_id) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }
  
      const newProduct = await Product.create({ id, name, price, category_id });
  
      res.status(201).json({ success: true, message: 'Product created successfully', product: newProduct });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to create product', error: err.message });
    }
  });
  
  // Get all products - GET request
  router.get('/', async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).json({ success: true, message: 'Products retrieved successfully', products });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to fetch products', error: err.message });
    }
  });
  
  // Get a product by ID - GET request
  router.get('/:id', async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
  
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
  
      res.status(200).json({ success: true, message: 'Product found', product });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to fetch product', error: err.message });
    }
  });
  
  // Update a product by ID - PUT request
  router.put('/:id', async (req, res) => {
    const { name, price, category_id } = req.body;
  
    if (!name || !price || !category_id) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
  
    try {
      const product = await Product.findByPk(req.params.id);
  
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
  
      product.name = name;
      product.price = price;
      product.category_id = category_id;
      await product.save();
  
      res.status(200).json({ success: true, message: 'Product updated successfully', product });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to update product', error: err.message });
    }
  });
  
  // Delete a product by ID - DELETE request
  router.delete('/:id', async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
  
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
  
      await product.destroy();
      res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ success: false, message: 'Failed to delete product', error: err.message });
    }
  });
  
  module.exports = router;