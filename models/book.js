const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  province: { type: String, required: true },
  city: { type: String, required: true },
  propertyName: { type: String, required: true },
  phone: { type: String, required: true },
  postalCode: { type: String, required: true },
  seats: { type: Number, required: true },
  rent: { type: Number, required: true },
  details: { type: String, required: true },
  available: { type: Boolean, required: true },
});

module.exports = mongoose.model('Book', bookSchema);
