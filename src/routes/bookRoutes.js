const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/api/book-coworking',        bookController.bookCoworkingSpace);
router.get('/api/search-coworkings',     bookController.searchCoworkings);
router.get('/api/search-all-coworkings', bookController.searchAllCoworkings);

module.exports = router;
