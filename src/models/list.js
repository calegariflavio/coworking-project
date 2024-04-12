const mongoose = require('mongoose');

const coworkingSpaceSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  propertyName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  rentPrice: {
    type: Number,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('CoworkingSpace', coworkingSpaceSchema);
