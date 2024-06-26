const express = require('express');
const { requestPasswordReset, resetPassword } = require('../controllers/passwordResetController');
const router = express.Router();

// @route   POST /api/password-reset/request
// @desc    Request password reset
// @access  Public
router.post('/request', requestPasswordReset);

// @route   POST /api/password-reset/reset
// @desc    Reset password
// @access  Public
router.post('/reset', resetPassword);

module.exports = router;
