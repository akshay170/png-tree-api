const mongoose = require('mongoose');

// Define a schema for the User collection
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

// Create a model for the User schema
const User = mongoose.model('User', userSchema);

module.exports = User;
