const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: String,
  body: String,
  date: { type: Date, default: Date.now },
  tags: [{ type: String }],
});

module.exports = mongoose.model("Posts", PostSchema);
