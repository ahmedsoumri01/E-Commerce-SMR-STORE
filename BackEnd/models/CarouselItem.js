const mongoose = require('mongoose');

const carouselItemSchema = new mongoose.Schema({
  image: { type: String, required: true },
  link: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const CarouselItem = mongoose.model('CarouselItem', carouselItemSchema);
module.exports = CarouselItem;
