const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if(!users){
      console.log("users not found")
    }
    
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllUsers };
