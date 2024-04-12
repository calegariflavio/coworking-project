//-------------------------IMPORTS--------------------------------
const cors = require('cors');
const express = require('express');
const listCoworkingRoute = require('./src/routes/listCoworkingRoute');
const { client, DATABASE_NAME, COLLECTION_NAME } = require('./database'); // Import from database.js

//-------------------------SERVER--------------------------------
const app = express();
const port = 3000;

//-------------------------MIDDLEWARES--------------------------------
app.use(express.json());
app.use(cors());
app.use(express.static('public')); 

//-------------------------ROUTES--------------------------------
app.use('/', listCoworkingRoute); // Mount the route 

//-------------------------ERROR HANDLING--------------------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//-------------------------SERVER LISTENING--------------------------------
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
