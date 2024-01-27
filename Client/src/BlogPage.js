import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Axios from 'axios';
import { Link } from "react-router-dom";

const BlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    Axios.get(`https://raul-blog-server.onrender.com/blogs/${id}`).then((response) => {
      setBlog(response.data);
    });
  }, [id]);

  const deleteBlog = (id) => {
    Axios.delete(`https://raul-blog-server.onrender.com/delete/${id}`).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  if (!blog) {
    return (
      <div className="loading">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <h1>{blog.title}</h1>
      <h2 style={{whiteSpace: "pre-wrap"}}>{blog.body}</h2>
      <h2>By {blog.author}</h2>
      <Link to="/" onClick={() => deleteBlog(id)}>Delete</Link>
    </div>
  );
}
 
export default BlogPage;