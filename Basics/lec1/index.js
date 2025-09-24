const express = require("express");
const userModel = require("./models/user");
const dbConnection = require("./config/db");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/about", (req, res) => {
  res.send("About Us Page");
});

app.post("/done", async (req, res) => {
  const { email, password } = req.body;
  await userModel.create({
    email: email,
    password: password,
  });
  res.send("Form Submitted");
});

app.get("/users", (req, res) => {
  userModel.find().then((users) => {
    res.send(users);
  });
});

app.get("/update", async (req, res) => {
  await userModel.findOneAndUpdate(
    {
      password: "2437",
    },
    {
      password: "2438",
    }
  );
  res.send("User updated");
});

app.get("/delete", async (req, res) => {
  await userModel.findOneAndDelete({
    password: "chitkara",
  });
  res.send("User deleted");
});

app.listen(3000, (req, res) => {
  console.log("Server is running on port 3000");
});
