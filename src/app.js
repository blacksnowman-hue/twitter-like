const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const userRoutes = require('./routes/userRoutes');
const tweetRoutes = require('./routes/tweetRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

module.exports = app;
