import * as mysql2 from "mysql2";
import { RowDataPacket } from 'mysql2';
import { mysqlHost, mysqlPort, mysqlUser, mysqlPassword, mysqlDatabase } from "../config.json";
import { LobbyMysqlData } from "../types/lobby";
import { User, UserMysqlData } from '../types/user';

class DatabaseService {
    private pool: mysql2.Pool
    
    constructor() {
        this.pool = mysql2.createPool({
            host:mysqlHost,
            port:mysqlPort,
            user:mysqlUser,
            password:mysqlPassword,
            database:mysqlDatabase
        })
        
        this.pool.getConnection((err) => {
            if (err) console.log("Not connected to MySQL DB : " + err);
            else console.log("Connected to MySQL DB");
        })
    }

    getPool() {
        return this.pool;
    }
}

export default new DatabaseService();