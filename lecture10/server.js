const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(
    "C:/Users/lenovo/OneDrive/Documents/Full Stack/CSS Projects/Login Page"
  )
);

app.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/lenovo/OneDrive/Documents/Full Stack/CSS Projects/Login Page/login.html"
  );
});

app.post("/", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
  };

  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
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
          console.log(err);
        } else {
            res.send("Login successful");
        }
      });
    }
  );
  console.log("Login Details: " + JSON.stringify(newUser));
});

app.listen(3000, () => {
  console.log("server started");
});
