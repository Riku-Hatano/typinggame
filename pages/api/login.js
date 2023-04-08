import { mysqlcon } from "./dbsrv";

export default function handler(req, res) {
    if(req.method === "POST") {
        mysqlcon.query(`select * from users where name = "${req.body.name}" and pw = "${req.body.pw}"`, (err, result) => {
            console.log(err);
            console.log(result);
            res.status(200).json({ message: result });
        })
    }
}