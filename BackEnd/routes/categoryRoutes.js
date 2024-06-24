const express = require('express');
const { addCategory, deleteCategory, getAllCategories } = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// @route   POST /api/categories
// @desc    Add a new category
// @access  Private/Admin
router.post('/', authMiddleware, addCategory);

// @route   DELETE /api/categories/:id
// @desc    Delete a category
// @access  Private/Admin
router.delete('/:id', authMiddleware, deleteCategory);

// @route   GET /api/categories
// @desc    Get all categories
// @access  Public
router.get('/', getAllCategories);

module.exports = router;
