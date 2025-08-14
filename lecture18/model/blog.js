const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: Date,
  blogs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Blog", blogSchema);
