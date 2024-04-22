const path = require('path');//handle the file path
const CoworkingModel = require('../models/coworkingModel'); //imports the variables and methods from the coworkingModel
const { client, DATABASE_NAME, COLLECTION_NAME } = require('../../database');  //imports the variables from database
const multer = require('multer'); //used to handle the uploaded files

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './public/uploads/') 
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname) 
  }
})
const upload = multer({ storage: storage }); //middleware 

module.exports = {
  //function to create a new coworking space list
  async listCoworking(req, res) {
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
          imagePath: '/public/uploads/' + req.file.filename, 
          additionalDetails: req.body.details, 
          available: req.body.available
        };

        // Save to database based on the coworkingData variable
        const result = await model.create(coworkingData); 
        res.status(200).json({ success: true, message: 'Listing saved successfully' }); 
      });

    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving listing');
    }
  }
};
