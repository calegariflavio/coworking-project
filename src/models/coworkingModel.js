const ObjectId = require('mongodb').ObjectId;
const { ObjectId } = require('mongodb');

class CoworkingModel {
  constructor(db, collectionName) { // Update: Receive the database object directly
    this.collection = db.collection(collectionName); 
  }

  async create(data) {
    const result = await this.collection.insertOne(data);
    return result;
  }
  
  async findAll(data) {
    const result = await this.collection.find(data).toArray();
    return result;
  }

  async find(data) {
    const result = await this.collection.find(data).toArray();
    return result;
  }

  async book(itemId) {
    const id = new ObjectId(itemId);
    await this.collection.updateOne({ _id: id }, { $set: { available: false } }); 
  }

  async findById(id) {
    return await this.collection.findOne({ _id: new ObjectId(id) });
  }
 
  async updateById(id, updatedData) {
    return await this.collection.updateOne({ _id: id }, { $set: updatedData });
  }
 
  async deleteById(id) {
    return await this.collection.deleteOne({ _id: new ObjectId(id) });
  }
 
}

module.exports = CoworkingModel;
