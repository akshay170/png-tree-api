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
    return res.status(400).json({message:"User with email or username already exist"})
  }

  const hashedPassword = await bcrypt.hash(this.password, 10)

  const user = await User.create({
    name,
    email,
    password:hashedPassword,
  })


  return res.status(200).json( {user:user, message:"User registered successfully"})


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
      const isPasswordValid = await bcrypt.compare(password, this.password)
  
      if(!isPasswordValid){
          throw error(401,"password does not correct !")
      }
  
  
      return res
      .status(200)
      .json({user:user ,message:"User LoggedIn Successfully"})
  
}
  
  
module.exports = { getAllUsers, signUp, login };

  

