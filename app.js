const dbConfig = require('./config/database');
const listCoworkingRouter = require('./routes/listRoutes'); 

const cors = require('cors');
const express = require('express');

const app = express();
const port = 3000; 

app.use(express.json());
app.use(cors());
app.use('/list-coworking', listCoworkingRouter);


// Starting the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

//-------------------------DATABASE--------------------------------

const mongoose = require('mongoose');

mongoose.connect(dbConfig.dbURI, dbConfig.dbOptions)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));


