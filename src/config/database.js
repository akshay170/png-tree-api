const express = require('express');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use the correct MongoDB connection string format
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
