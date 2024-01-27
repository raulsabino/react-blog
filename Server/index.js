const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const BlogModel = require('./models/blogs');
require('dotenv').config();

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.post("/insert", async (req,res) => {
  const title = req.body.title;
  const description = req.body.description;
  const body = req.body.body;
  const author = req.body.author;

  const blog = new BlogModel({title: title, description: description, body: body, author: author, date: new Date()});

  try{
    await blog.save();
  } catch(err) {
    console.log(err)
  }
});

app.get("/read", async (req,res) => {
  try {
    const result = await BlogModel.find({}).sort({ date: -1 });
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get("/blogs/:id", async (req, res) => {
  const blogId = req.params.id;

  try {
    const result = await BlogModel.findById(blogId);
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const isValidObjectId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidObjectId) {
    return res.status(400).send("Invalid ID");
  }

  try {
    await BlogModel.findByIdAndRemove(id).exec();
    res.send("deleted");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(8080, () => {
  console.log(`Server is running on port ${8080}`);
});