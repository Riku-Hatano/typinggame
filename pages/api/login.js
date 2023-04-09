import { db } from "./lib/database/dbconnection";

export default function handler(req, res) {
    if(req.method === "POST") {
        db.query(`select * from users where name = "${req.body.name}" and pw = "${req.body.pw}"`, (err, result) => {
            if(err) throw err;
            res.status(200).json({ message: result });
        })
    } else {
        res.status(400).json({ message: "bad request" });
    }
}