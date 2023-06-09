import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import { Container } from "react-bootstrap";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title='Wishlist' />

      <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <Container fluid='lg'>
          <div className='row'>
            <div className='col-3'>
              <div className='wishlist-card  position-relative'>
                <img
                  src='images/cross.svg'
                  alt='cross'
                  className='position-absolute
                cross img-fluid'
                />
              </div>

              <div className='wishlist-card-image'>
                <img
                  src='images/watch.jpg'
                  alt=''
                  className='img-fluid w-100'
                />
              </div>
              <div className='px-3 py-3'>
                <h5 className='title'>A watch </h5>
                <h6 className='price'>$100</h6>
              </div>
            </div>
            <div className='col-3'>
              <div className='wishlist-card  position-relative'>
                <img
                  src='images/cross.svg'
                  alt='cross'
                  className='position-absolute
                cross img-fluid'
                />
              </div>

              <div className='wishlist-card-image'>
                <img
                  src='images/watch.jpg'
                  alt=''
                  className='img-fluid w-100'
                />
              </div>
              <div className='px-3 py-3'>
                <h5 className='title'>A watch </h5>
                <h6 className='price'>$100</h6>
              </div>
            </div>
            <div className='col-3'>
              <div className='wishlist-card  position-relative'>
                <img
                  src='images/cross.svg'
                  alt='cross'
                  className='position-absolute
                cross img-fluid'
                />
              </div>

              <div className='wishlist-card-image'>
                <img
                  src='images/watch.jpg'
                  alt=''
                  className='img-fluid w-100'
                />
              </div>
              <div className='px-3 py-3'>
                <h5 className='title'>A watch </h5>
                <h6 className='price'>$100</h6>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Wishlist;
