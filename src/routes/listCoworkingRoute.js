const express = require('express'); //use the express module
const router = express.Router(); // create a route 
const listCoworkingController = require('../controllers/listCoworkingController');//imports the variables and methods from the listCoworkingController

router.post('/list-coworking', listCoworkingController.listCoworking); //difines a POST route and uses the function listCoworking

module.exports = router; //export to make it avaliable
