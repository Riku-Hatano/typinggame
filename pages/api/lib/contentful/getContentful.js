import { createClient } from "contentful";

export default function getContentful(req, res) {
    if(req.method === "GET") {
        const client = createClient({
            space: "jivp4q6rn93f",
            accessToken: "lX7fWPWoJdKgbnEgSCU2kSEGlEBT0H1PFqdWiuntS3s"
        })
        client.getEntries({ content_type: "rikuHatano" }).then(
            (resp) => {
                res.status(200).json({ message: resp.items });
            },
            (rejc) => {
                console.log(rejc);
                res.status(400).json({ message: "failed to get data" });
            }
        )
    }
}