const express = require('express');
const router = express.Router();
const listCoworkingController = require('../controllers/listController');

router.post('/api/list-coworking', listCoworkingController.listNewCoworkingSpace);

module.exports = router;
