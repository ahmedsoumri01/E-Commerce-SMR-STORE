const express = require('express');
const {
  generateDiscountCode,
  useDiscountCode,
  getAllDiscountCodes,
  deleteDiscountCode
} = require('../controllers/discountController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

// @route   POST /api/discounts
// @desc    Generate a new discount code
// @access  Private/Admin
router.post('/', authMiddleware, adminMiddleware, generateDiscountCode);

// @route   POST /api/discounts/use
// @desc    Use a discount code
// @access  Public
router.post('/use', useDiscountCode);

// @route   GET /api/discounts
// @desc    Get all discount codes
// @access  Private/Admin
router.get('/', authMiddleware, adminMiddleware, getAllDiscountCodes);

// @route   DELETE /api/discounts/:id
// @desc    Delete a discount code
// @access  Private/Admin
router.delete('/:id', authMiddleware, adminMiddleware, deleteDiscountCode);

module.exports = router;
