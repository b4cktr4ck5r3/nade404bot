import { Mongoose } from "mongoose";
import { mongoUri, mongoDb, mongoUser, mongoPass } from "../config.json";

class MongoDatabase {
  private db: Mongoose;

  constructor() {
    this.db = new Mongoose();
    this.db
    .connect(mongoUri, {
      dbName: mongoDb,
      user: mongoUser,
      pass: mongoPass,
    }).then(() => console.log("Connected to db"))
    .catch((e) => console.log("Error while connecting to db"))
  }

  getDatabase() : Mongoose {
    return this.db;
  }
}

export default new MongoDatabase();