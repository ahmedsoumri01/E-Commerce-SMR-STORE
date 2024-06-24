const mongoose = require('mongoose');

const stockAlertSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

const StockAlert = mongoose.model('StockAlert', stockAlertSchema);
module.exports = StockAlert;
