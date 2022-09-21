import { ObjectId } from 'mongodb';
import { mongoClient } from '../database/mongo.client.js';

export class RecipesService {
  static collection = mongoClient.db('recipes').collection('recipes');
  static async find() {
    return this.collection.find().toArray();
  }

  static async findById(id) {
    return this.collection.findOne({ _id: new ObjectId(id) });
  }

  static async create(recipe) {
    await this.collection.insertOne(recipe);
    return recipe;
  }

  static async update(id, recipe) {
    this.collection.updateOne({ _id: new ObjectId(id) }, { $set: recipe });
    return recipe;
  }

  static async delete(id) {
    this.collection.deleteOne({ _id: new ObjectId(id) });
  }
}
