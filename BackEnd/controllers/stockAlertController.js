const StockAlert = require('../models/StockAlert');
const Product = require('../models/Product');

// Create a stock alert
const createStockAlert = async (req, res) => {
  const { product, quantity } = req.body;

  try {
    const stockAlert = new StockAlert({
      product,
      quantity
    });

    const savedAlert = await stockAlert.save();
    res.status(201).json(savedAlert);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all stock alerts
const getAllStockAlerts = async (req, res) => {
  try {
    const alerts = await StockAlert.find({}).populate('product', 'name');
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a stock alert
const deleteStockAlert = async (req, res) => {
  try {
    const alert = await StockAlert.findById(req.params.id);

    if (alert) {
      await alert.remove();
      res.json({ message: 'Stock alert removed' });
    } else {
      res.status(404).json({ message: 'Stock alert not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createStockAlert,
  getAllStockAlerts,
  deleteStockAlert
};
