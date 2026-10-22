const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

// Import routes
const ngoRoutes = require('./routes/ngoRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const donationRoutes = require('./routes/donationRoutes');

const MONGO_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ngo', ngoRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/donations', donationRoutes);

// Database connection + server start
if (!MONGO_URI) {
  console.error("❌ MONGODB_URI not found in .env");
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});
