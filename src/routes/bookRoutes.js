const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/search-all-coworkings', bookController.searchAllCoworkings);
router.post('/search-coworking', bookController.searchCoworking);
router.patch('/book-coworking', bookController.bookCoworking);

module.exports = router;

