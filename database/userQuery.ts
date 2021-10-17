import mongoose, { Document, Model, Schema } from "mongoose";
import { User } from "../types/user";
import database from "./database";

const UserSchema : Schema = new Schema({
    discordId: String,
    steamId: String,
});

export type USER_DOC = Document<mongoose.Types.ObjectId> & User;

class UserQuery {
    private model: Model<USER_DOC>;

    constructor() {
        this.model = database.getDatabase().model<USER_DOC>("User", UserSchema);
    }

    async addUser(user : User) : Promise<boolean> {
        const alreadyExist = Boolean(
            await this.model.findOne({ discordId : user.discordId }).lean()
        );

        if (!alreadyExist) {
            const document = await this.model.create(user);
            if (document) return true;
        }

        return false;
    }

    async getUser(discordId : string) : Promise<User | null> {
        const document = await this.model
            .findOne({discordId : discordId})
            .lean()

        if (document) return document;
        else return null;
    }
}

export default new UserQuery();