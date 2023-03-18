import React, { useState } from "react";
import { Container } from "react-bootstrap";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import Watch from "../images/watch.jpg";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(false);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerHTML = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title='Product Name' />

      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <Container fluid='lg'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-product-image'>
                <div>
                  <img
                    src={Watch}
                    alt=''
                  />
                </div>
              </div>
              <div className='other-product-images d-flex flex-wrap gap-15'>
                <div>
                  <img
                    src={Watch}
                    alt='product'
                    className='img-fluid'
                  />
                </div>
                <div>
                  <img
                    src={Watch}
                    alt='product'
                    className='img-fluid'
                  />
                </div>
                <div>
                  <img
                    src={Watch}
                    alt='product'
                    className='img-fluid'
                  />
                </div>
                <div>
                  <img
                    src={Watch}
                    alt='product'
                    className='img-fluid'
                  />
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='main-product-details'>
                <div className='border-bottom'>
                  <h3 className='title'>A Watch</h3>
                </div>
                <div className='border-bottom py-3'>
                  <p className='price'>$ 100.00</p>
                  <div className='d-flex align-items-center gap-10'>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor='#ffd760'
                    />
                    <p className='mb-0 t-reviews'>(2 Reviews )</p>
                  </div>
                  <a
                    className='review-btn'
                    href='#review'
                  >
                    Write a review
                  </a>
                </div>
                <div className='border-bottom py-3'>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Type: </h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Brand: </h3>
                    <p className='product-data'>Oraimo</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Category: </h3>
                    <p className='product-data'>watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Tags: </h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Availability: </h3>
                    <p className='product-data'>In Stock</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Size: </h3>
                    <div className='d-flex flex-wrap gap-15'>
                      <span className='badge border border-1 text-dark bg-white border-secondary'>
                        S
                      </span>
                      <span className='badge border border-1 text-dark bg-white border-secondary'>
                        M
                      </span>
                      <span className='badge border border-1 text-dark bg-white border-secondary'>
                        XL
                      </span>
                      <span className='badge border border-1 text-dark bg-white border-secondary'>
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                    <h3 className='product-heading'>Color: </h3>
                    <Color />
                  </div>
                  <div className='d-flex align-items-center gap-10 flex-row my-2'>
                    <h3 className='product-heading'>Quantity: </h3>
                    <div className=''>
                      <input
                        type='number'
                        name=''
                        style={{ width: "60px" }}
                        min={1}
                        max={10}
                        className='form-control'
                      />
                    </div>
                    <div className='d-flex align-items-center gap-15 ms-5'>
                      <button
                        className='button border-0'
                        type='submit'
                      >
                        Add To Cart
                      </button>
                      <button className='button signup'>Buy It Now</button>
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-15'>
                    <div>
                      <a href=''>
                        <TbGitCompare className='fs-5 me-2' />
                        Add To Compare
                      </a>
                    </div>
                    <div>
                      <a href=''>
                        <AiOutlineHeart className='fs-5 me-2' /> Add To Wishlist
                      </a>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column my-3'>
                    <h3 className='product-heading'>Shipping & Returns: </h3>
                    <p className='product-data'>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt, itaque.
                    </p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Copy Product Link: </h3>
                    <a
                      href='javascript:void(0)'
                      onClick={() => {
                        copyToClipboard();
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className='description-wrapper py-5 home-wrapper-2'>
        <Container fluid='lg'>
          <div className='row'>
            <div className='col-12'>
              <h4>Description</h4>

              <div className='bg-white p-3'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  iusto enim maiores tenetur! Maxime ut quod quae veritatis
                  tempora sequi eligendi ullam magni? Saepe eaque fugit velit
                  deleniti!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <section className='reviews-wrapper home-wrapper-2'>
        <Container fluid='lg'>
          <div className='row'>
            <div className='col-12'>
              <h3>Reviews</h3>
              <div className='review-inner-wrapper'>
                <div className='review-head d-flex justify-content-between align-items-end'>
                  <div>
                    <h4
                      id='review'
                      className='mb-2'
                    >
                      Customer Reviews
                    </h4>
                    <div className='d-flex align-items-center gap-10'>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor='#ffd760'
                      />
                      <p className='mb-0'>Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className='text-dark text-decoration-underline'
                        href=''
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className='review-form py-4'>
                  <h4>Write A Review</h4>
                  <form
                    action=''
                    className='d-flex flex-column gap-15'
                  >
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={true}
                        activeColor='#ffd760'
                      />
                    </div>
                    <div>
                      <textarea
                        name=''
                        className='form-control w-100'
                        id=''
                        placeholder='Comments'
                        cols='30'
                        rows='4'
                      ></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className='reviews mt-4'>
                  <div className='review'>
                    <div className='d-flex gap-10 align-items-center'>
                      <h6 className='mb-0'>Valz</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor='#ffd760'
                      />
                    </div>
                    <p className='mt-3'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Nulla tenetur voluptate id quibusdam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className='popular-wrapper py-5 home-wrapper-2'>
        <Container fluid='lg'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Trending products</h3>
            </div>
            <div className='row'>
              <ProductCard />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SingleProduct;
