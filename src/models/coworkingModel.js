class CoworkingModel {
  constructor(db, collectionName) { // Update: Receive the database object directly
    this.collection = db.collection(collectionName); 
  }

  async create(data) {
    const result = await this.collection.insertOne(data);
    return result;
  }

  // Add other model methods as needed (find, update, delete)
}

module.exports = CoworkingModel;
