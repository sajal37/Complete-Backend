const express = require("express");
const fs = require("fs");
const mysql = require("mysql2");
const path = require("path");
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

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Motleyfurl#12",
  database: "loginDB",
});

db.connect((err) => {
  if (err) {
    console.log("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL!");
  }
});

app.post("/", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
  };
  
  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  db.query(sql, [newUser.email, newUser.password], (err, result) => {
    if (err) {
      console.log("MySQL Insert Error:", err);
      return res.status(500).send("Database error");
    }

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
        console.log("Login Details: " + JSON.stringify(newUser));
        res.send("Login successful");
      }
      })
    });
  });
});

app.listen(3000, () => {
  console.log("server started");
});
