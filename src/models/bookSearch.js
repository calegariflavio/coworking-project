const mongoose = require('mongoose');

const bookSearchSchema = new mongoose.Schema({
  city: {
    type: String,
    require: true
  },
  maxPrice: {
    type: Number,
    require: true
  },
  seats: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model('BookingSearch', bookSearchSchema);
