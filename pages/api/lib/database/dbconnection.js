import { dbconfig } from "./dbconfig";
const mysql = require("mysql");

export const db = mysql.createConnection(dbconfig);
db.connect((err) => {
    if(err) throw err;
});