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

  async book(data) {
    const result = await this.collection.update(data);
    return result;
  }
 
}

module.exports = CoworkingModel;
