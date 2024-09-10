const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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


//bcrypt the password before save 
userSchema.pre("save", async function(next) {
  
  if (!this.isModified("password")) return next();
  
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

//custom methods
userSchema.methods.isPasswordCorrect = async function(password) {
  return await bcrypt.compare(password, this.password)
}


// Create a model for the User schema
const User = mongoose.model('User', userSchema);

module.exports = User;
