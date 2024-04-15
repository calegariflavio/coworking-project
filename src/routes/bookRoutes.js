const express = require('express');//use the express module
const router = express.Router();// create a route 
const bookController = require('../controllers/bookController'); //imports the variables and methods from the bookController

router.get('/search-all-coworkings', bookController.searchAllCoworkings);//difines a GET route and uses the function seacheAllCoworkings
router.post('/search-coworking', bookController.searchCoworking); //difines a POST route and uses the function searchCoworking
router.patch('/book-coworking', bookController.bookCoworking); //difines a PATCH route and uses the function updateCoworkSpace 

module.exports = router;//export to make it avaliable

