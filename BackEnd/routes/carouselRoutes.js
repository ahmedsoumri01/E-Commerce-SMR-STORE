const express = require('express');
const {
  addCarouselItem,
  getAllCarouselItems,
  updateCarouselItem,
  deleteCarouselItem
} = require('../controllers/carouselController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

// @route   POST /api/carousel
// @desc    Add a new carousel item
// @access  Private/Admin
router.post('/', authMiddleware, adminMiddleware, addCarouselItem);

// @route   GET /api/carousel
// @desc    Get all carousel items
// @access  Public
router.get('/', getAllCarouselItems);

// @route   PUT /api/carousel/:id
// @desc    Update a carousel item
// @access  Private/Admin
router.put('/:id', authMiddleware, adminMiddleware, updateCarouselItem);

// @route   DELETE /api/carousel/:id
// @desc    Delete a carousel item
// @access  Private/Admin
router.delete('/:id', authMiddleware, adminMiddleware, deleteCarouselItem);

module.exports = router;
