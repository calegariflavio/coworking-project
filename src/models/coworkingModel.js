const ObjectId = require('mongodb').ObjectId; //interact with MongoDB collections to store cowork space data

class CoworkingModel { 
  constructor(db, collectionName) { //this constructor will initialize the CoworkingModel that will have db connection and collectionName
    this.collection = db.collection(collectionName); 
  }
  //inserts one new document into the collection
  async create(data) {
    const result = await this.collection.insertOne(data);
    return result;
  }
  //returns all documents in the collection retur it inside of a array
  async findAll(data) {
    const result = await this.collection.find(data).toArray();
    return result;
  }
  //similar to findAll
  async find(data) {
    const result = await this.collection.find(data).toArray();
    return result;
  }
  //this one will update the document in the collection as avaliable or not 
  async book(itemId) {
    const id = new ObjectId(itemId);
    await this.collection.updateOne({ _id: id }, { $set: { available: false } }); 
  }
  //finds an unique element by its id
  async findById(id) {
    return await this.collection.findOne({ _id: new ObjectId(id) });
  }
  //updates the unique element by its id
  async updateById(id, updatedData) {
    return await this.collection.updateOne({ _id: id }, { $set: updatedData });
  }
  //deletes the unique element by its id
  async deleteById(id) {
    return await this.collection.deleteOne({ _id: new ObjectId(id) });
  }
 
}

module.exports = CoworkingModel; //exports to make it avaliable
