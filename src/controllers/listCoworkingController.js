const path = require('path');
const CoworkingModel = require('../models/coworkingModel'); 
const { client, DATABASE_NAME, COLLECTION_NAME } = require('../../database'); 
const multer = require('multer'); 

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './public/views/uploads/') 
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname) 
  }
})
const upload = multer({ storage: storage });

module.exports = {
  async listCoworking(req, res) {
    console.log('Incoming request:', req.method, req.url);

    try {
      // Create model instance 
      const model = new CoworkingModel(client.db(DATABASE_NAME), COLLECTION_NAME); 

      // Multer Middleware
      await upload.single('file')(req, res, async (err) => { 
        if (err) {
          console.error('Error uploading file:', err);
          return res.status(500).send('Error uploading file');
        }

        // Construct coworkingData 
        const coworkingData = {
          name: req.body.name,
          email: req.body.email,
          address: req.body.address,
          province: req.body.province,
          city: req.body.city,
          propertyName: req.body.propertyName,
          phone: req.body.phone,
          postalCode: req.body.postalCode,
          seatsAvailable: req.body.seats,
          expectedRent: req.body.rent,
          imagePath: '/public/views/uploads/' + req.file.filename, 
          additionalDetails: req.body.details, 
          available: req.body.available
        };

        // Save to database
        const result = await model.create(coworkingData); 
        res.status(200).json({ success: true, message: 'Listing saved successfully' }); 
      });

    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving listing');
    }
  }
};
