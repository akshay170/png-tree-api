const express = require('express');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use the correct MongoDB connection string format
    await mongoose.connect('mongodb+srv://akshaydhanwate00:eK0esfKdQgwvuZuJ@cluster0.bbich.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
