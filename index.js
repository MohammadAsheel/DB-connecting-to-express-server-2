// index.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message);
    process.exit(1); // exit process on failure
  }
};

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB(); // connect to DB before server starts
  console.log(`🚀 Server running on port ${PORT}`);
});

// Test route
app.get('/', (req, res) => {
  res.send('Event Management API is running');
});
