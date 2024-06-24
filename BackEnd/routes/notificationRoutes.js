const express = require('express');
const { getAllNotifications, markAsRead } = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const router = express.Router();

// @route   GET /api/notifications
// @desc    Get all notifications for admin
// @access  Private/Admin
router.get('/', authMiddleware, adminMiddleware, getAllNotifications);

// @route   PUT /api/notifications/:id
// @desc    Mark notification as read
// @access  Private/Admin
router.put('/:id', authMiddleware, adminMiddleware, markAsRead);

module.exports = router;
