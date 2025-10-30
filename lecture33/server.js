const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const { createClient } = require("redis");

let client;

async function connect() {
  client = createClient();

  client.on("error", function (err) {
    console.log("Error: " + err);
  });

  await client.connect();
}

connect()
  .then(() => {
    app.listen(3000, () => {
      console.log("connected to redis");
      cachedData();
    });
  })
  .catch((err) => {
    console.error("Failed to connect:", err);
  });

async function cachedData() {
  await client.set(
    "users:100",
    JSON.stringify([
      {
        name: "pranay",
        age: "19",
      },
    ])
  );

  console.log("Data cached successfully!");
}

async function readUser (){
    await client.connect();
    let user=await client.get("user:100");
    return user;
}

readUser().
then((data)=>{
    console.log(JSON.parse(data));
})