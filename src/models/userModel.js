const mongoose = require('mongoose');

// Define a schema for the User collection
const userSchema = new mongoose.Schema({
  name:
  {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
}, { timestamps: true });






// Create a model for the User schema
const User = mongoose.model('User', userSchema);

module.exports = User;
