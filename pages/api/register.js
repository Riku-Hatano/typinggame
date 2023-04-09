import { db } from "./lib/database/dbconnection";

export default function register(req, res) {
    switch(req.method) {
        case "GET":
            db.query("select * from users", (err, result) => {
                if(err) throw err;
                res.status(200).json({ message: result });
            })
            break;
        case "POST": 
            db.query("insert into users (name, pw) values(?, ?)", [req.body.name, req.body.pw], (err) => {
                if(err) throw err;
                res.status(200).json({ message: req.body });
            })
            break;
        default:
            res.status(400).json({ message: "bad request!" });
    }
}