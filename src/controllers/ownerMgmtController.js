const CoworkingModel = require('../models/coworkingModel'); 
const { ObjectId } = require('mongodb'); // Import ObjectId
const { client, DATABASE_NAME, COLLECTION_NAME } = require('../../database'); 


// Function to process the search filters
module.exports = {
  async searchAllCoworkings(req, res) {
    console.log('Incoming request:', req.method, req.url);

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

  async getOneCoworking(req, res) {
    try {
      const model = new CoworkingModel(client.db(DATABASE_NAME), COLLECTION_NAME); 
      const spaceId = req.params.id;
      console.log('Incoming space ID:', spaceId, 'Type:', typeof(spaceId));
      const foundSpace = await model.findById(new ObjectId(spaceId)); 
      console.log('Found space:', foundSpace);
  
      if (foundSpace) {
        res.json(foundSpace);
      } else {
        res.status(404).json({ message: "Space not found" });
      }
    } catch (error) {
      console.error("Error fetching space:", error);
      res.status(500).json({ message: "Error fetching space" });
    }
  },

  async updateCoworkSpace(req, res) {
    try {
      const model = new CoworkingModel(client.db(DATABASE_NAME), COLLECTION_NAME);
      const spaceId = req.params.id;
      const updatedData = req.body;
  
      const updateResult = await model.updateById(new ObjectId(spaceId), updatedData);
  
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

  async deleteCoworkSpace(req, res) {
    try {
      const model = new CoworkingModel(client.db(DATABASE_NAME), COLLECTION_NAME);
      const spaceId = req.params.id;
  
      const deleteResult = await model.deleteById(new ObjectId(spaceId));
  
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



