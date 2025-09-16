const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use((req, res, next) => {
    console.log("middleware");
    next();
})

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/about", (req, res) => {
  res.send("About Us Page");
});

app.listen(3000);
