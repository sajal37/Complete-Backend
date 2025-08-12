const express=require("express");
const app=express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded());
app.post("/user", (req, res) => {
    try {
        const { email, password } = req.body;
    console.log("User added:", { email, password });
    res.status(201).json({ message: "User added successfully" });
} catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Internal server error" });
}
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});