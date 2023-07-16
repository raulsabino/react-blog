const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})

const Blog = mongoose.model("blogs", BlogSchema);
module.exports =  Blog;