const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.post("/users", (req, res) => {
  const newUser = {
    name: req.body.name,
    rollno: req.body.rollno
  };

  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
    }

    let users;

    if (data) {
      users = JSON.parse(data);
    } else {
      users = [];
    }
    users.push(newUser);

    fs.writeFile("data.json", JSON.stringify(users, null, 2), (err) => {
      if (err) {
        console.error(err);
      }

      res.send(newUser);
    });
  });
});

app.listen(3000, () => {
  console.log("server started");
});
