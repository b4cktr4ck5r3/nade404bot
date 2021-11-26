import * as mysql2 from "mysql2";
import { RowDataPacket } from 'mysql2';
import { mysqlHost, mysqlPort, mysqlUser, mysqlPassword, mysqlDatabase } from "../config.json";
import { LobbyMysqlData } from "../types/lobby";
import { User, UserMysqlData } from '../types/user';

class DatabaseService {
    private db: mysql2.Connection
    
    constructor() {
        this.db = mysql2.createConnection({
            host:mysqlHost,
            port:mysqlPort,
            user:mysqlUser,
            password:mysqlPassword,
            database:mysqlDatabase
        })

        this.db.connect((err) => {
            if (err) console.log("Not connected to MySQL DB : " + err);
            else console.log("Connected to MySQL DB");
        })
    }

    getDatabase() {
        return this.db;
    }
}

export default new DatabaseService();