const dbConfig = require('./config/database');

const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());

// Starting the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

//-------------------------DATABASE--------------------------------

const mongoose = require('mongoose');

mongoose.connect(dbConfig.dbURI, dbConfig.dbOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));


