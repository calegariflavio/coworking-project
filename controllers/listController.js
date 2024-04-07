const listCoworkingSpace = require('../models/list');

//handles the saving of the coworking space data into MongoDB database.
exports.listNewCoworkingSpace = async (req, res) => {
  try {
    const newCoworkingSpace = new listCoworkingSpace({
        id: req.body.id, 
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        province: req.body.province,
        city: req.body.city,
        propertyName: req.body.propertyName,
        phone: req.body.phone,
        postalCode: req.body.postalCode,
        seats: req.body.seats,
        rentPrice: req.body.rent,
        details: req.body.details,
        available: req.body.available
    });
    const savedSpace = await newCoworkingSpace.save();
    res.status(201).json(savedSpace);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};