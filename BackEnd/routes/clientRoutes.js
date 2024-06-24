const express = require('express');
const {
  getClientProfile,
  updateClientProfile,
  deleteClientAccount
} = require('../controllers/clientController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// @route   GET /api/client/profile
// @desc    Get client profile
// @access  Private
router.get('/profile', authMiddleware, getClientProfile);

// @route   PUT /api/client/profile
// @desc    Update client profile
// @access  Private
router.put('/profile', authMiddleware, updateClientProfile);

// @route   DELETE /api/client/profile
// @desc    Delete client account
// @access  Private
router.delete('/profile', authMiddleware, deleteClientAccount);

module.exports = router;
