const MongoClient = require('mongodb').MongoClient; //import MongoClient from the mongodb class
//const DB_URI = "mongodb+srv://flavioescalegari:199408@cluster0.lbnjm3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//DB_URI is the specifies the connect string from the mongodb Atlas
const DB_URI = "mongodb+srv://coworkinglogin:FVMT2024@cluster0.91deyi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = "Cluster0"; //is the database name
const COLLECTION_NAME = "crud"; //is the colection name

let client;
//this function will start the connection to the database
async function connectToDatabase() {
  try {
    client = new MongoClient(DB_URI);
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
}

// Connect to the database
connectToDatabase();

//export the variables to be used for other files
module.exports = {
  client, 
  DATABASE_NAME,
  COLLECTION_NAME
};
