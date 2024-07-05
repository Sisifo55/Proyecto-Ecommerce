const Product = require('../models/product');

// Create a product
exports.createProduct = async (req, res) => {
    try {
      const { name, description, price } = req.body;
  
      if (!name || !description || !price) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      const newProduct = await Product.create({ name, description, price });
  
      res.status(201).json({ message: 'Product created', product: newProduct });
    } catch (err) {
      res.status(500).json({ message: 'Error creating product', error: err.message });
    }
  };

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching product', error: err.message });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.name = name;
    product.description = description;
    product.price = price;
    await product.save();

    res.status(200).json({ message: 'Product updated', product });
  } catch (err) {
    res.status(500).json({ message: 'Error updating product', error: err.message });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.destroy();
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting product', error: err.message });
  }
};

