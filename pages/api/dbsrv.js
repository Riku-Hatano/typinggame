const mysql = require("mysql");
export const mysqlcon = mysql.createConnection({
    host: "localhost",
    user: "lu",
    password: "",
    port: 3306,
    database: "test_db",
    socketPath: "/tmp/mysql.sock",
    insecureAuth: true
});
mysqlcon.connect((err) => {
    if(err) throw err;
})

export default function handler(req, res){
    if(req.method === "POST") {
        mysqlcon.query("insert into users (name, pw) values(?, ?)", [req.body.name, req.body.pw], (err, result) => {
            console.log(err);
            console.log(result);
        })
        res.status(200).json({ message: req.body });
    } else if(req.method === "GET") {
        mysqlcon.query("select * from users", (err, result) => {
            console.log(err);
            console.log(result);
            res.status(200).json({ message: result });
        })
    } else {
        res.status(400).json({ message: "bad request!" });
    }
}