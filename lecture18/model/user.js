const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: Date,
  blogs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
