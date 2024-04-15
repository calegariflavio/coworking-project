//-------------------------IMPORTS--------------------------------
const cors = require('cors'); //enables Cross_Origin Resource Sharing
const express = require('express'); //creates the server
const path = require('path'); //handle the file path
const listCoworkingRoute = require('./src/routes/listCoworkingRoute'); //route to listCoworkeRoute
const bookCoworkingRoute = require('./src/routes/bookRoutes'); //route to bookRoutes
const mgmtRoutes = require('./src/routes/mgmtRoutes'); //route to mgmtRoutes
const { client, DATABASE_NAME, COLLECTION_NAME } = require('./database'); // Import from database.js

//-------------------------SERVER--------------------------------
const app = express(); //creates a express app to be the initial point of start
const port = 3000; //server port selected

//-------------------------MIDDLEWARES--------------------------------
app.use(express.json()); //parse the body from a json object
app.use(cors()); //allow to be requested from another domain

// Serve frontend files (Place this before your routes)
const publicPath = path.join(__dirname, 'public/views'); 
app.use(express.static(publicPath)); //servers static files from a specified directory

//-------------------------ROUTES--------------------------------
app.use('/', listCoworkingRoute); //handles the root URL + listCoworkingRoute
app.use('/', bookCoworkingRoute); //handles the root URL + bookCoworkingRoute
app.use('/', mgmtRoutes); //handles the root URL + mgmtRoutes

//-------------------------ERROR HANDLING--------------------------------
app.use((err, req, res, next) => { //this error handle will catches error during the request
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

//-------------------------SERVER LISTENING--------------------------------
app.listen(port, () => { //this to starts the server at the http://localhost:3000
  console.log(`Server running on port: http://localhost:${port}`);
})
