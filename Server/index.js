const express = require('express');
const app = express();
const mongoose = require('mongoose');
const BlogModel = require('./models/blogs');

app.use(express.json());

mongoose.connect('mongodb+srv://raulbrazsabino:QRPFlkgWBYbFPOvy@cluster0.xnuwiu6.mongodb.net/?retryWrites=true&w=majority',{
  useNewUrlParser: true,
});

app.post("/insert", strict_slashes=False, async (req,res) => {
  const title = req.body.title;
  const description = req.body.description;
  const body = req.body.body;
  const author = req.body.author;
  const id = req.body.id;

  const blog = new BlogModel({title: title, description: description, body: body, author: author});

  try{
    await blog.save();
  } catch(err) {
    console.log(err)
  }
});

app.listen(8000, () => {
  console.log(`Server is running on port ${8000}`);
});