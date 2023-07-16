const express = require('express');
const app = express();
const mongoose = require('mongoose');
const BlogModel = require('./models/blogs');

app.use(express.json());

mongoose.connect('mongodb+srv://raulbrazsabino:QRPFlkgWBYbFPOvy@cluster0.xnuwiu6.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true,
});

app.get("/", async (req,res) => {
  const blog = new BlogModel({title: "My First Blog", body: "This is the blog content 1.", author: "mario", id: 1});

  try{
    await blog.save();
  } catch(err) {
    console.log(err)
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});