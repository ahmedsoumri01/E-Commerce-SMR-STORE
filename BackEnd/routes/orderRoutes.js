const express = require('express');
const {
  placeOrder,
  getAllOrders,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder
} = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

// @route   POST /api/orders
// @desc    Place a new order
// @access  Private
router.post('/', authMiddleware, placeOrder);

// @route   GET /api/orders
// @desc    Get all orders
// @access  Private/Admin
router.get('/', authMiddleware, adminMiddleware, getAllOrders);

// @route   GET /api/orders/myorders
// @desc    Get user-specific orders
// @access  Private
router.get('/myorders', authMiddleware, getUserOrders);

// @route   GET /api/orders/:id
// @desc    Get order by ID
// @access  Private
router.get('/:id', authMiddleware, getOrderById);

// @route   PUT /api/orders/:id
// @desc    Update order status
// @access  Private/Admin
router.put('/:id', authMiddleware, adminMiddleware, updateOrderStatus);

// @route   DELETE /api/orders/:id
// @desc    Delete an order
// @access  Private/Admin
router.delete('/:id', authMiddleware, adminMiddleware, deleteOrder);

module.exports = router;
