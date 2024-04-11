//-------------------------SERVER--------------------------------
const cors = require('cors');
const express = require('express');

const app = express();
const port = 3000; 

app.use(express.json());
app.use(cors());

// Starting the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

//-------------------------DATABASE--------------------------------

//Database Connection
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID; // For working with MongoDB IDs

const DB_URI = "mongodb+srv://flavioescalegari:199408@cluster0.lbnjm3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your connection URI
const DATABASE_NAME = 'Cluster0'; // Replace with your database name
const COLLECTION_NAME = 'crud'; // Replace with your collection name

const client = new MongoClient(DB_URI);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}

connectToDatabase();

module.exports = {
  DATABASE_NAME,
  COLLECTION_NAME
}

