import db from "./mysqlDatabase";
import { User, UserMysqlData } from "../types/user";
import { RowDataPacket } from "mysql2";
import * as mysql2 from "mysql2";

interface QueryReturn {
    success: boolean,
    steamId: string | null
}

export async function FindUser(discordId: string) : Promise<QueryReturn> {
    return new Promise((resolve, reject) => {
        const res = {
            success: false,
            steamId: null
        }

        const queryString : string = `SELECT * FROM du_users WHERE userid=?`
        db.getDatabase().query(queryString, discordId, (err, rows : RowDataPacket[], fields) => {
            if (err) {
                console.log(err)
                return reject(err);
            }

            if (rows && rows.length > 0) {
                const row = (<RowDataPacket> rows)[0];
                if (row) {
                    res.steamId = row.steamid;
                }
            }

            resolve(res);
        })
    })
}