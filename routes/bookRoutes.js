const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/api/book-coworking', bookController.bookCoworking);

module.exports = router;
