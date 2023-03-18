import React from "react";
import { Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  console.log(location);

  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to=':id'
          className='product-card position-relative'
        >
          <div className='wishlist-icon position-absolute'>
            <Button className='border-0 bg-transparent'>
              <img
                src='images/wish.svg'
                alt='wishlist'
              />
            </Button>
          </div>
          <div className='product-img'>
            <img
              src='images/watch.jpg'
              className='img-fluid'
              alt='Product'
            />
            <img
              src='images/watch-1.avif'
              className='img-fluid'
              alt='Product'
            />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Oraimo</h6>
            <h5 className='product-title'>
              Kids Headphones bulk 10 pack multicolored for childern
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor='#ffd760'
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              alias temporibus ab deleniti voluptate voluptatem!
            </p>
            <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <img
                  src='images/prodCompare.svg'
                  alt='action'
                />
              </Link>
              <Link>
                <img
                  src='images/view.svg'
                  alt='action'
                />
              </Link>
              <Link>
                <img
                  src='images/add-cart.svg'
                  alt='action'
                />
              </Link>
            </div>
          </div>
        </Link>
      </div>

      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
            <Link>
              <img
                src='images/wish.svg'
                alt='wishlist'
              />
            </Link>
          </div>
          <div className='product-img'>
            <img
              src='images/watch.jpg'
              className='img-fluid'
              alt='Product'
            />
            <img
              src='images/watch-1.avif'
              className='img-fluid'
              alt='Product'
            />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Oraimo</h6>
            <h5 className='product-title'>
              Kids Headphones bulk 10 pack multicolored for childern
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor='#ffd760'
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              alias temporibus ab deleniti voluptate voluptatem!
            </p>
            <p className='price'>$100.00</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                <img
                  src='images/prodCompare.svg'
                  alt='action'
                />
              </button>
              <button className='border-0 bg-transparent'>
                <img
                  src='images/view.svg'
                  alt='action'
                />
              </button>
              <button className='border-0 bg-transparent'>
                <img
                  src='images/add-cart.svg'
                  alt='action'
                />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
