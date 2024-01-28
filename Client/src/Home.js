import React, { useState, useEffect } from 'react';
import Card from './Card';
import Axios from 'axios';
import { Link } from "react-router-dom";


const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isDelay, setIsDelay] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDelay(true);
    }, 3000);

    Axios.get('https://raul-blog-server.onrender.com/read').then((response) => {
      setBlogs(response.data);
      clearTimeout(timeout);
    });

    return () => clearTimeout(timeout);
  }, []);

  if (!blogs) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
        {isDelay && <h1>If this is taking too long the server might be asleep and it can take a bit to turn it on</h1>}
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