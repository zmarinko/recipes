import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { mongoClient } from '../database/mongo.client.js';

export class UsersService {
  static collection = mongoClient.db('users').collection('users');

  static async register(user) {
    user.password = await bcrypt.hash(user.password, 10);
    await this.collection.insertOne(user);
    return jwt.sign({ id: user._id }, 'teskasifra', { expiresIn: '1d' });
  }

  static async login(username, password) {
    const user = await this.collection.findOne({ username });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        return jwt.sign({ id: user._id }, 'teskasifra', { expiresIn: '1d' });
      }
    }
    return null;
  }
}
