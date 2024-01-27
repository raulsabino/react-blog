import React, { useState, useEffect } from 'react';
import Card from './Card';
import Axios from 'axios';
import { Link } from "react-router-dom";


const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    Axios.get('https://raul-blog-server.onrender.com/read').then((response) => {
      setBlogs(response.data)
    })
  }, []);

  if (!blogs) {
    return (
      <div className="loading">
        <h1>Loading ...</h1>
      </div>
    );
  }
    
  
  return ( 
    <div className="card">
      {blogs.map(blog => (
        <Link to={`/blogs/${blog._id}`} key={blog._id}>
          <Card
          title={blog.title}
          description={blog.description}
          author={blog.author}
          />
        </Link>
      ))}
    </div>
   );
}
 
export default Home;