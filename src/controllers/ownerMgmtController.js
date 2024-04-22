const CoworkingModel = require('../models/coworkingModel');  //imports the variables and methods from the coworkingModel
const { ObjectId } = require('mongodb'); // Import ObjectId
const { client, DATABASE_NAME, COLLECTION_NAME } = require('../../database'); //imports the variables from the database


// Function to process the search filters
module.exports = {
  async searchAllCoworkings(req, res) {
    try {
      // Create model instance 
      const model = new CoworkingModel(client.db(DATABASE_NAME), COLLECTION_NAME); 

      // Retrieve data
      const allCoworkings = await model.findAll(); 
      res.json(allCoworkings);       

    } catch (error) {
      console.error('Error retrieving coworkings:', error);
      res.status(500).json({ 
        success: false,
        message: 'Error retrieving coworkings' 
      }); 
    }
  },
  //function to find one cowork space
  async getOneCoworking(req, res) {
    try {
      // Create model instance 
      const model = new CoworkingModel(client.db(DATABASE_NAME), COLLECTION_NAME); 
      const spaceId = req.params.id; //request the body parameter id
      const foundSpace = await model.findById(new ObjectId(spaceId)); //extract the id 
  
      if (foundSpace) {
        res.json(foundSpace); //return a json data
      } else {
        res.status(404).json({ message: "Space not found" });
      }
    } catch (error) {
      console.error("Error fetching space:", error);
      res.status(500).json({ message: "Error fetching space" });
    }
  },
  //function to update a corwork space
  async updateCoworkSpace(req, res) {
    try {
      // Create model instance 
      const model = new CoworkingModel(client.db(DATABASE_NAME), COLLECTION_NAME);
      const spaceId = req.params.id; //request the body parameter id
      const updatedData = req.body; //request the body
  
      const updateResult = await model.updateById(new ObjectId(spaceId), updatedData); //new value updated
  
      if (updateResult.modifiedCount > 0) {
        res.sendStatus(200); 
      } else {
        res.status(404).json({ message: "Space not found" });
      }
    } catch (error) {
      console.error("Error updating space:", error);
      res.status(500).json({ message: "Error updating space" });
    }
  },
  //function to delete a cowork space
  async deleteCoworkSpace(req, res) {
    try {
      // Create model instance 
      const model = new CoworkingModel(client.db(DATABASE_NAME), COLLECTION_NAME);
      const spaceId = req.params.id; //request the body parameter id
  
      const deleteResult = await model.deleteById(new ObjectId(spaceId)); //deleted object
  
      if (deleteResult.deletedCount === 1) {
        res.sendStatus(204); 
      } else {
        res.status(404).json({ message: "Space not deleted" });
      }
    } catch (error) {
      console.error("Error updating space:", error);
      res.status(500).json({ message: "Error deleting space" });
    }
  }
  
}



