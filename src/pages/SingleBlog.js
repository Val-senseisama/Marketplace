import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Blog from "../images/blog-1.jpg";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title='Dynamic Blog Name' />
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <Container fluid='lg'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card'>
                <Link
                  to='/blog'
                  className='d-flex align-items-center gap-10'
                >
                  <HiOutlineArrowLeft className='fs-4' /> Go back to Blogs
                </Link>
                <h3 className='title'>A Beautiful Sunday Morning</h3>
                <img
                  src={Blog}
                  alt='Yanga'
                  className='img-fluid my-4 w-100'
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  tempore, veniam beatae ad harum eos nam commodi, modi,
                  accusantium culpa laboriosam quos aliquid. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Corporis ut, autem
                  ratione id inventore nobis quaerat exercitationem aut
                  accusantium commodi enim, dicta possimus quia vel tempore
                  earum necessitatibus et ducimus sequi nulla animi porro amet.
                  Fugiat doloremque ab enim minus?
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingleBlog;
