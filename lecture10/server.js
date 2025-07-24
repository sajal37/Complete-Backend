const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("C:/Users/lenovo/OneDrive/Documents/Full Stack/CSS Projects/Login Page"));

app.get("/", (req, res) => {
  res.sendFile("C:/Users/lenovo/OneDrive/Documents/Full Stack/CSS Projects/Login Page/login.html");
});

app.post("/", (req,res)=> {
    const newUser={
        email: req.body.email,
        password: req.body.password
    }
    console.log("Login Details: "+JSON.stringify(newUser));
    res.send("Login successful");
})

app.listen(3000, () => {
  console.log("server started");
});
