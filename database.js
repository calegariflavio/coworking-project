const MongoClient = require('mongodb').MongoClient;
//const DB_URI = "mongodb+srv://flavioescalegari:199408@cluster0.lbnjm3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DB_URI = "mongodb+srv://coworkinglogin:FVMT2024@cluster0.91deyi2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = "Cluster0";
const COLLECTION_NAME = "crud";

let client;

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

module.exports = {
  client, 
  DATABASE_NAME,
  COLLECTION_NAME
};
