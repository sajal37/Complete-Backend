const {createClient} = require("redis");
let publisher=createClient();

async function notifyMe() {
    await publisher.connect();
    await publisher.PUBLISH("notifyMe", (data) => {
        console.log(data);
    });
}
notifyMe()