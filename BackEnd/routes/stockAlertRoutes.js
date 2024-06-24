const express = require('express');
const {
  createStockAlert,
  getAllStockAlerts,
  deleteStockAlert
} = require('../controllers/stockAlertController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

// @route   POST /api/stock-alerts
// @desc    Create a stock alert
// @access  Private/Admin
router.post('/', authMiddleware, adminMiddleware, createStockAlert);

// @route   GET /api/stock-alerts
// @desc    Get all stock alerts
// @access  Private/Admin
router.get('/', authMiddleware, adminMiddleware, getAllStockAlerts);

// @route   DELETE /api/stock-alerts/:id
// @desc    Delete a stock alert
// @access  Private/Admin
router.delete('/:id', authMiddleware, adminMiddleware, deleteStockAlert);

module.exports = router;
