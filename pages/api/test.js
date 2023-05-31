export default function test(req, res) {
    switch(req.method) {
        case "GET":
            res.status(200).json({message: "get data successfully!!"});
            break;
        case "POST":
            res.status(200).json({message: `your post data was ${req.body.data}`});
    }
}