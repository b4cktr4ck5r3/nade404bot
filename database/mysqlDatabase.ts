import mysql from 'mysql'
import { mysqlHost, mysqlPassword, mysqlUser, mysqlDatabase } from "../config.json";

export const mysqlDb = mysql.createConnection({
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlPassword,
    database: mysqlDatabase
  });