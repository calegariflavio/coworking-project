//-------------------------IMPORTS--------------------------------
const cors = require('cors');
const express = require('express');
const path = require('path'); 
const listCoworkingRoute = require('./src/routes/listCoworkingRoute');
const retrieveCoworkingRoute = require('./src/routes/bookRoutes');
const { client, DATABASE_NAME, COLLECTION_NAME } = require('./database'); // Import from database.js

//-------------------------SERVER--------------------------------
const app = express();
const port = 3000;

//-------------------------MIDDLEWARES--------------------------------
app.use(express.json());
app.use(cors());

// Serve frontend files (Place this before your routes)
const publicPath = path.join(__dirname, 'public/views'); 
app.use(express.static(publicPath)); 

//-------------------------ROUTES--------------------------------
app.use('/', listCoworkingRoute); // Mount the route 
app.use('/', retrieveCoworkingRoute);

//-------------------------ERROR HANDLING--------------------------------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//-------------------------SERVER LISTENING--------------------------------
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
