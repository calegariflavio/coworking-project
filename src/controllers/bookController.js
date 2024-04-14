const path = require('path');
const CoworkingModel = require('../models/coworkingModel'); 
const { client, DATABASE_NAME, COLLECTION_NAME } = require('../../database'); 
const express = require('express');
const app = express();

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

  async searchCoworking(req, res) {

    try {
      // Create model instance 
      const model = new CoworkingModel(client.db(DATABASE_NAME), COLLECTION_NAME); 

      // Retrieve data
      const coworkings = await model.find(); 
      res.json(coworkings);       

    } catch (error) {
      console.error('Error retrieving coworkings:', error);
      res.status(500).json({ 
        success: false,
        message: 'Error retrieving coworkings' 
      }); 
    }
  },
  
  async bookCoworking(req, res) {  
    try {
      // Create model instance 
      const model = new CoworkingModel(client.db(DATABASE_NAME), COLLECTION_NAME); 
      // Retrieve data
      const itemId = req.body.itemId; 
      await model.book(itemId); 
      res.status(200).json({ success: true, message: 'Listing saved successfully' }); 
    } catch (error) {
      console.error('Error booking coworking:', error);
      res.status(500).json({ 
        success: false,
        message: 'Error booking coworking' 
      }); 
    }
  }

};

