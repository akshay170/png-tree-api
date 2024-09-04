require('dotenv').config(); 
const express = require('express');
const connectDB = require('./config/database'); 
const app = require('./app'); 


// Connect to the database
connectDB()
.then(() => {

  app.listen(process.env.PORT || 3100, () => {
      console.log(`Server is running at PORt: ${process.env.PORT || 3100} `);
  })

  app.on("error",(error)=>{
      console.log("error",error)
      throw error
  })
})
.catch((error) => {
  console.log("MONGO db connection failed !!", error)
})