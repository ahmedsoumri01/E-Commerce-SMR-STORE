const User = require('../models/User');
const Order = require('../models/Order');
const Product = require('../models/Product');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      await user.remove();
      res.json({ message: 'User removed' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get admin profile info
const getAdminProfile = async (req, res) => {
  try {
    const admin = await User.findById(req.user.id).select('-password');
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update admin profile
const updateAdminProfile = async (req, res) => {
  const { name, email } = req.body;

  try {
    const admin = await User.findById(req.user.id);

    if (admin) {
      admin.name = name || admin.name;
      admin.email = email || admin.email;

      const updatedAdmin = await admin.save();
      res.json(updatedAdmin);
    } else {
      res.status(404).json({ message: 'Admin not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get statistics and reports
const getStatistics = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalOrders = await Order.countDocuments();
    const totalProducts = await Product.countDocuments();
    const totalRevenue = await Order.aggregate([
      { $group: { _id: null, total: { $sum: '$totalPrice' } } }
    ]);

    res.json({
      totalUsers,
      totalOrders,
      totalProducts,
      totalRevenue: totalRevenue[0]?.total || 0
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllUsers,
  deleteUser,
  getAdminProfile,
  updateAdminProfile,
  getStatistics
};
