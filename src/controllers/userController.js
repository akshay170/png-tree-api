const User = require('../models/userModel');


const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      console.log("users not found")
    }

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//signup 
const signUp = async (req, res) => {

  const { name, email, password } = req.body

  //  validation -not empty 
  if ([email, name, password].some((field) => field?.trim() === "")) {
    throw error(400, "all fields are required")
  }

  //check if use already exist :name ,email
  const existedUser = await User.findOne({
    $or: [{ name }, { email }]
  })

  if (existedUser) {
    throw error(409, "User with email or name is already exist")
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  // remove password  field from response
  const createdUser = await User.findById(user._id).select(
    "-password"
  )

  if (!createdUser) {
    throw error(500, "something Went wrong while registering a user")
  }

  return res.status(200).json( {user:createdUser, message:"User registered successfully"})


}

//login user 
const login= async(req,res)=>{  
  
  
      const {email,password}=req.body
  
      if(!email){
          throw error(400,"email is required")
      }
  
      //  find the user
      const user=await User.findOne({email})
  
      if(!user){
          throw error(404,"user does not exist !")
      }
  
      // password check using custom method created in user model
      const isPasswordValid = await user.isPasswordCorrect(password)
  
      if(!isPasswordValid){
          throw error(401,"password does not correct !")
      }
  
  
      return res
      .status(200)
      .json({user:user ,message:"User LoggedIn Successfully"})
  
}
  
  
module.exports = { getAllUsers, signUp, login };

  

