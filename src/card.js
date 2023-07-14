import React from 'react';

const Card = ({title,author,content}) => {
  return ( 
    <div className="blog-card">
        <h1>{title}</h1>
        <h2>{content}</h2>
        <p>{author}</p>
    </div>
   );
}
 
export default Card;