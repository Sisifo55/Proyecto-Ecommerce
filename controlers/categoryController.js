const Category = require('../models/category');
const Product = require('../models/product');

// Метод для создания новой категории
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Метод для получения всех категорий
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Метод для получения категории по ID
const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Метод для обновления категории по ID
const updateCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Category.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedCategory = await Category.findByPk(id);
      return res.status(200).json(updatedCategory);
    }
    throw new Error('Category not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Метод для удаления категории по ID
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Category.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Category not found');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};