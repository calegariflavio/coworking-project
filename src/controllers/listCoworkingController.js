const multer = require('multer');
const path = require('path');
const CoworkingModel = require('../models/coworkingModel'); 
const { client, DATABASE_NAME, COLLECTION_NAME } = require('../../database'); // Import from database.js

// Configure Multer 
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, '../../uploads')),
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

module.exports = {
  async listCoworking(req, res) {
    try {
      // Ensure database connection (if you haven't done this elsewhere in app.js)
      await client.connect();

      // Create model instance 
      const model = new CoworkingModel(client.db(DATABASE_NAME), COLLECTION_NAME); 

      // Handle file upload (Multer middleware)
      const uploadResult = await upload.single('file')(req, res, (err) => {
        if (err) {
          return res.status(400).send({ error: 'Error uploading file' });
        }
      });

      // Collect form data and construct the document
      const coworkingData = {
        // ... your form data fields ...
        imagePath: (req.file) ? '/uploads/' + req.file.filename : null
      };

      // Save to database
      const result = await model.create(coworkingData); 

      res.send('Listing saved successfully');

    } catch (error) {
      console.error(error);
      res.status(500).send('Error saving listing');
    }
  }
};
