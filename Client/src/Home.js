import React, { useState } from 'react';
import Card from './Card';

// const { MongoClient } = require('mongodb');

// const url = 'mongodb+srv://raulbrazsabino:QRPFlkgWBYbFPOvy@cluster0.xnuwiu6.mongodb.net/?retryWrites=true&w=majority';
// const dbName = 'Cluster0';

// MongoClient.connect(url, function(err, client) {
//   if (err) {
//     console.error('Error connecting to MongoDB:', err);
//     return;
//   }

//   console.log('Connected successfully to MongoDB');

//   // Access the database
//   const db = client.db(dbName);

//   // Use the database for further operations
//   // ...
// });


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