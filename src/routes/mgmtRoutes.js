const express = require('express');
const router = express.Router();
const ownerMgmtController = require('../controllers/ownerMgmtController');

router.get('/search-all-coworkings', ownerMgmtController.searchAllCoworkings);
router.get('/find-one-coworking-space', ownerMgmtController.getOneCoworking);
router.patch('/update-coworking-space/:id', ownerMgmtController.updateCoworkSpace);
router.delete('/delete-coworking/:id', ownerMgmtController.deleteCoworkSpace);

module.exports = router;

