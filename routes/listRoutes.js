const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');

router.post('/api/list-coworking', listController.listCoworking);

module.exports = router;
