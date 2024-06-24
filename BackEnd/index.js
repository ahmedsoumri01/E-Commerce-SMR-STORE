const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/products/:productId/reviews', require('./routes/reviewRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/discounts', require('./routes/discountRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/carousel', require('./routes/carouselRoutes'));
app.use('/api/stock-alerts', require('./routes/stockAlertRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/client', require('./routes/clientRoutes'));
app.use('/api/password-reset', require('./routes/passwordResetRoutes'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
