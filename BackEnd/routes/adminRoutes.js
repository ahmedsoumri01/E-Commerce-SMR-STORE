const express = require('express');
const {
  getAllUsers,
  deleteUser,
  getAdminProfile,
  updateAdminProfile,
  getStatistics
} = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

// @route   GET /api/admin/users
// @desc    Get all users
// @access  Private/Admin
router.get('/users', authMiddleware, adminMiddleware, getAllUsers);

// @route   DELETE /api/admin/users/:id
// @desc    Delete a user
// @access  Private/Admin
router.delete('/users/:id', authMiddleware, adminMiddleware, deleteUser);

// @route   GET /api/admin/profile
// @desc    Get admin profile
// @access  Private/Admin
router.get('/profile', authMiddleware, adminMiddleware, getAdminProfile);

// @route   PUT /api/admin/profile
// @desc    Update admin profile
// @access  Private/Admin
router.put('/profile', authMiddleware, adminMiddleware, updateAdminProfile);

// @route   GET /api/admin/statistics
// @desc    Get statistics and reports
// @access  Private/Admin
router.get('/statistics', authMiddleware, adminMiddleware, getStatistics);

module.exports = router;
