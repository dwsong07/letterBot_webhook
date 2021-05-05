require("dotenv").config();

const fetch = require("node-fetch");
const messageGen = require("./message");

const webhook_url = process.env.WEBHOOK_URL;

(async () => {
    const message = await messageGen();
    console.log(message);

    fetch(webhook_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
    });
})().catch((err) => console.error(err));
