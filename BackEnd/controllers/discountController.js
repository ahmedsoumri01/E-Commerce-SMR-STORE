const Discount = require('../models/Discount');

// Generate a discount code
const generateDiscountCode = async (req, res) => {
  const { code, percentage, expiresAt } = req.body;

  try {
    const discountExists = await Discount.findOne({ code: new RegExp(`^${code}$`, 'i') });

    if (discountExists) {
      return res.status(400).json({ message: 'Discount code already exists' });
    }

    const discount = new Discount({
      code,
      percentage,
      expiresAt
    });

    const savedDiscount = await discount.save();
    res.status(201).json(savedDiscount);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Use a discount code
const useDiscountCode = async (req, res) => {
  const { code } = req.body;

  try {
    const discount = await Discount.findOne({ code: new RegExp(`^${code}$`, 'i') });

    if (!discount || !discount.isActive || new Date(discount.expiresAt) < new Date()) {
      return res.status(400).json({ message: 'Invalid or expired discount code' });
    }

    res.json({ percentage: discount.percentage });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all discount codes
const getAllDiscountCodes = async (req, res) => {
  try {
    const discounts = await Discount.find({});
    res.json(discounts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a discount code
const deleteDiscountCode = async (req, res) => {
  try {
    const discount = await Discount.findById(req.params.id);

    if (discount) {
      await discount.remove();
      res.json({ message: 'Discount code removed' });
    } else {
      res.status(404).json({ message: 'Discount code not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  generateDiscountCode,
  useDiscountCode,
  getAllDiscountCodes,
  deleteDiscountCode
};
