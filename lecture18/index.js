const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Blog = require("./model/blog");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/blogs", async (req, res) => {
  let title = req.body;
  let body = req.body;
  let blog = {
    title: title,
    body: body,
    date: Date.now(),
  };
  let newBlog = new Blog(blog);
  await newBlog.save();
  res.json({
    sucess: true,
    message: "blog added sucessfully",
  });
});

app.get("/blogs", async (req, res) => {
  let allBlogs = await Blog.find();
  res.json({
    sucess: true,
    message: "all data fetched sucessfully",
    data: allBlogs,
  });
});
app.get("/blogs/:id", async (req, res) => {
  let id = req.params.id;
  let blog = await Blog.findById(id);
  res.json({
    sucess: true,
    message: "blog fetched sucesfully",
    data: blog,
  });
});
app.post("/blogs", async (req, res) => {
  const { title, body, userId } = req.body;

  const user = await User.findById(userId);
  if (!user) {
    return res.json({ success: false, message: "User not found" });
  }

  const newBlog = new Blog({
    title,
    body,
    author: user._id,
  });
  await newBlog.save();

  user.blogs.push(newBlog._id);
  await user.save();

  res.json({
    success: true,
    message: "Blog created successfully",
    data: newBlog,
  });
});

let newBlog = new Blog(blog);
await newBlog.save();
let user = await UserActivation.findById(userId);
user.blogs.push(newBlog.id);
await user.save();
res.json({
  sucess: true,
  message: "blog added secuessfully",
  data: newBlog,
});

mongoose
  .connect("mongodb://127.0.0.1:27017/G27DBs")
  .then(() => console.log("Connected"));
app.listen(5556, () => {
  console.log("server started");
});
