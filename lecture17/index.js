const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then(() => res.status(201).send(blog))
    .catch((err) => res.status(400).send(err));
});
app.get("/blogs", async (req, res) => {
  let allBlogs = await Blog.find();
  res.json({
    success: true,
    message: "Fetched all blogs successfully",
    data: allBlogs,
  });
});
app.get("/blogs/:id", async (req, res) => {
  let id = req.params.id;
  let blog = await Blog.findById(id);
  res.json({
    success: true,
    message: "Fetched blog successfully",
    data: blog,
  });
});
mongoose
  .connect("mongodb://127.0.0.1:27017/test")
  .then(() => console.log("Connected!"));
app.listen(5556, () => {
  console.log("Server started on port 5556");
});
