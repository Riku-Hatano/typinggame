import { createClient } from "contentful";
const contentful = require('contentful-management')


export default function getContentful(req, res) {
    const client = createClient({
        space: "jivp4q6rn93f",
        accessToken: "lX7fWPWoJdKgbnEgSCU2kSEGlEBT0H1PFqdWiuntS3s"
    })

    if(req.method === "GET") {
        client.getEntries({ content_type: "rikuHatano" }).then(
            (resp) => {
                res.status(200).json({ message: resp.items });
            },
            (rejc) => {
                console.log(rejc);
                res.status(400).json({ message: "failed to get data" });
            }
        )
    } else if(req.method === "POST") {
        // res.status(200).json({ message: req.body.name })
        const entry = {
            fields: {
                tittle: {
                    "en-US": req.body.tittle
                },
                slug: {
                    "en-US": req.body.slug
                },
                content: {
                    "en-US": {
                        nodeType: "document",
                        data: {},
                        content: [
                            {
                                nodeType: "paragraph",
                                data: {},
                                content: [
                                    {
                                        nodeType: "text",
                                        value: req.body.content,
                                        marks: [],
                                        data: {}
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        }

        const managementClient = contentful.createClient({
            accessToken: "CFPAT-1TieUWuOMg6lso2jVKRKaaTnBwxd6-yuVti2-iqRQho"
        });

        managementClient.getSpace("jivp4q6rn93f")
            .then((space) => space.getEnvironment('master'))
            .then((environment) => environment.createEntry('rikuHatano', entry))
            .then((entry) => {
                console.log('Entry created:', entry);
                entry.publish();
                res.status(200).json({ message: 'Entry created' });
            })
            .catch((error) => {
                console.error('Error creating entry:', error);
                res.status(400).json({ message: 'Failed to create entry' });
            });
    }
}