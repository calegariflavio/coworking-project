const express = require('express');
const router = express.Router();
const listCoworkingController = require('../controllers/listCoworkingController');

router.post('/list-coworking', listCoworkingController.listCoworking);

module.exports = router;
