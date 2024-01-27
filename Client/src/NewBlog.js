import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const addToList = () => {
    Axios.post('https://raul-blog-server.onrender.com/insert',{
      title: title,
      description: description,
      body: body,
      author: author
    });
  }


  return ( 
    <div className="new-blog">
      <h1>Blog Title</h1>
      <textarea id="small" onChange={(event) => {
        setTitle(event.target.value);
        }}></textarea>
      <h1>Blog Description</h1>
      <textarea id="medium" onChange={(event) => {
        setDescription(event.target.value);
        }}></textarea>
      <h1>Body</h1>
      <textarea id="big" onChange={(event) => {
        setBody(event.target.value);
        }}></textarea>
      <h1>Author</h1>
      <textarea id="small" onChange={(event) => {
        setAuthor(event.target.value);
        }}></textarea>
        <Link to="/" onClick={addToList}>Submit</Link>
    </div>
   );
}
 
export default NewBlog;