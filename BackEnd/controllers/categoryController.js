const Category = require('../models/Category');
const Product = require('../models/Product');

// Add a new category
const addCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const categoryExists = await Category.findOne({ name: new RegExp(`^${name}$`, 'i') });

    if (categoryExists) {
      return res.status(400).json({ message: 'Category already exists' });
    }

    const category = new Category({ name });
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a category
const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);

    if (category) {
      const products = await Product.find({ category: category.name });

      if (products.length > 0) {
        return res.status(400).json({ message: 'Category contains products and cannot be deleted' });
      }

      await category.remove();
      res.json({ message: 'Category removed' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addCategory,
  deleteCategory,
  getAllCategories
};
