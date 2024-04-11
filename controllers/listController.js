const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const { DATABASE_NAME, COLLECTION_NAME } = require('../app');


// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/') // File storage destination
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname) // Use original file name
  }
})

// Multer instance
const upload = multer({ storage: storage });

app.use(cors());

// List Routes

// POST

module.exports = {
  listNewCoworkingSpace: async (req, res, next, client) => {
    upload.single('file')(req, res, async function (err) {
      console.log("AQUI");
      const file = req.file;
      if (!file) {
        const error = new Error('Please upload a file');
        error.httpStatusCode = 400;
        return next(error);
      }

      try {
        const db = client.db(DATABASE_NAME);
        const collection = db.collection(COLLECTION_NAME);

        const doc = {
          name: req.body.name,
          age: req.body.age,
          gender: req.body.gender,
          imagePath: '/uploads/' + req.file.filename 
        };

        const insertResult = await collection.insertOne(doc);

        res.send('File uploaded and data saved successfully');

      } catch (error) { 
        console.error("Error saving data to database:", error);
        next(error); // Pass error for appropriate handling
      }
    });
  }
}
