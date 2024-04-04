const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());

// Importing my controllers
const bookController = require('');
const listController = require('');


// Starting the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

//-------------------------DATABASE--------------------------------

const { MongoClient } = require("mongodb");

// Replace with your MongoDB Atlas connection string or connection parameters for a local installation
const uri = "mongodb+srv://vcalegari1:Ufpr20127552!@cluster0.89xlc2t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    // Access or create a database 
    const database = client.db("myDatabase"); 

    // Access or create a collection
    const usersCollection = database.collection("users"); 

    // Your database interactions will go here (insert, find, update, etc.)

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

