const bookSearchModel = require('../models/bookSearch');

exports.searchCoworkings = async (req, res) => {
  try {
    const bookSearch = new bookSearchModel({
      city: req.body.city,
      maxPrice: req.body.maxPrice,
      seats: req.body.seats
    }); 

    const bookSearchDetails = await bookSearch.find();
    res.status(201).json(bookSearchDetails);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.searchAllCoworkings = async (req, res) => {
  try {
    const bookSearchDetails = await bookSearchModel.find({}); 
    res.status(200).json(bookSearchDetails);
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
};


