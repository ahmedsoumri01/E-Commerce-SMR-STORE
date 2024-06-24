const express = require('express');
const { addReview, getReviews } = require('../controllers/reviewController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router({ mergeParams: true });

// @route   POST /api/products/:productId/reviews
// @desc    Add a review
// @access  Private
router.post('/', authMiddleware, addReview);

// @route   GET /api/products/:productId/reviews
// @desc    Get all reviews for a product
// @access  Public
router.get('/', getReviews);

module.exports = router;
