import React from 'react';
import { Link } from "react-router-dom";

const Card = ({title,author,description}) => {
  return ( 
    <div className="blog-card">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p>{author}</p>
    </div>
   );
}
 
export default Card;