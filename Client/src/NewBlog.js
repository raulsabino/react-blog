import React, { useState } from 'react';
import Axios from 'axios';

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const addToList = () => {
    Axios.post('http://localhost:8000/insert',{
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
      <textarea id="small" onChange={(event) => {
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
      <button onClick={addToList}>Submit</button>
    </div>
   );
}
 
export default NewBlog;