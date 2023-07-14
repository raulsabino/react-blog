import React, { useState } from 'react';
import Card from './card';

const Home = () => {
 const [blogs, setBlogs] = useState([
  {
    title: 'Example Title 1',
    author: 'John Doe',
    content: 'This is the blog content 1.'
  },
  {
    title: 'Example Title 2',
    author: 'Jane Smith',
    content: 'This is the blog content 2.'
  },
  {
    title: 'Example Title 3',
    author: 'Jane Doe',
    content: 'This is the blog content 3.'
  },
  {
    title: 'Example Title 2',
    author: 'Jane Smith',
    content: 'This is the blog content 2.'
  },
  {
    title: 'Example Title 3',
    author: 'Jane Doe',
    content: 'This is the blog content 3.'
  }
 ]) 
  
  
  return ( 
    <div className="card">
      {blogs.map(blog => (
        <Card
          title={blog.title}
          content={blog.content}
          author={blog.author}
        />
      ))}
    </div>
   );
}
 
export default Home;