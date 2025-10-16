const express = require("express");
const app = express();
const { createClient } = require("redis");
async function connect() {
  const client = await createClient();
  await client.connect();
  client.on("error", (err) => console.log("Redis Client Error", err));
}

connect().then(() => {
  app.listen(3000, function () {
    console.log("server is running on port 3000");
  });
});
