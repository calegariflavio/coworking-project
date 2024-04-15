const express = require('express'); //use the express module
const router = express.Router(); // create a route 
const ownerMgmtController = require('../controllers/ownerMgmtController'); //imports the variables and methods from the ownerMgmtController

router.get('/search-all-coworkings', ownerMgmtController.searchAllCoworkings); //difines a GET route and uses the function seacheAllCoworkings
router.get('/find-one-coworking-space', ownerMgmtController.getOneCoworking); //difines a GET route and uses the function getOneCoworking
router.patch('/update-coworking-space/:id', ownerMgmtController.updateCoworkSpace); //difines a PATCH route and uses the function updateCoworkSpace by id
router.delete('/delete-coworking/:id', ownerMgmtController.deleteCoworkSpace); //difines a DELETE route and uses the function deleteCoworkSpace by id

module.exports = router; //export to make it avaliable

