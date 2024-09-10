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

//signup 

const signUp = async(req,res)=>{

  const {name,email,password} = req.body

  if (!name || !email || !password) {
    res.status(204).json({ error: "all fields are required" });
  }


  try {
    const user = await User.create({
      name:name,
      email:email,
      password:password
    })

    if(!user){
      throw error("Error while registering the user ")
    }

    res.status(200).json({message:"user sucessfully registered",user})
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
}
