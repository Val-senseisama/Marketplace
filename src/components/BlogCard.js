import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className='blog-card'>
      <div className='card-image'>
        <img
          src='images/blog-1.jpg'
          className='img-fluid w-100'
          alt='Blog'
        />
      </div>
      <div className='blog-content'>
        <p className='date'>1 Decemeber 2022</p>
        <h5 className='title'>A Beautiful Sunday Morning Renaissance</h5>
        <p className='description'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <Link
          to='/blog/:id'
          className='button'
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
