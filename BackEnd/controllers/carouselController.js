const CarouselItem = require('../models/CarouselItem');

// Add a new carousel item
const addCarouselItem = async (req, res) => {
  const { image, link } = req.body;

  try {
    const newItem = new CarouselItem({ image, link });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all carousel items
const getAllCarouselItems = async (req, res) => {
  try {
    const items = await CarouselItem.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update a carousel item
const updateCarouselItem = async (req, res) => {
  const { image, link } = req.body;

  try {
    const item = await CarouselItem.findById(req.params.id);

    if (item) {
      item.image = image || item.image;
      item.link = link || item.link;

      const updatedItem = await item.save();
      res.json(updatedItem);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a carousel item
const deleteCarouselItem = async (req, res) => {
  try {
    const item = await CarouselItem.findById(req.params.id);

    if (item) {
      await item.remove();
      res.json({ message: 'Item removed' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addCarouselItem,
  getAllCarouselItems,
  updateCarouselItem,
  deleteCarouselItem
};
