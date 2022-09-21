import { MongoClient } from 'mongodb';

export const mongoClient = new MongoClient(
  'mongodb+srv://zeljana:123@cluster0.4eiaord.mongodb.net/?retryWrites=true&w=majority'
);
