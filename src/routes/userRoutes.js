const express = require('express');
const { getAllUsers, signUp, login } = require('../controllers/userController');
const router = express.Router();

// Define routes
router.get('/get-all-users', getAllUsers);
router.post('/sign-up', signUp); 
router.post('/login', login);    

module.exports = router;
