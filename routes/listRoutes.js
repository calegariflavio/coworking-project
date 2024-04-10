const express = require('express');
const router = express.Router();
const listCoworkingController = require('../controllers/listController');

router.post('/', listCoworkingController.listNewCoworkingSpace);

module.exports = router;
