import { Mongoose } from "mongoose";
import { mongoUri, mongoDb, mongoUser, mongoPass } from "../config.json";

class Database {
  private db: Mongoose;

  constructor() {
    this.db = new Mongoose();
    this.db
    .connect(mongoUri, {
      dbName: mongoDb,
      user: mongoUser,
      pass: mongoPass,
    })
  }

  getDatabase() {
    return this.db;
  }
}

export default new Database();