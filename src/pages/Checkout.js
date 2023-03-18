import React from "react";
import { Container } from "react-bootstrap";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import Watch from "../images/watch.jpg";

const Checkout = () => {
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title='Checkout' />
      <div className='checkout-wrapper py-5 home-wrapper-2'>
        <Container fluid='xl'>
          <div className='container-lg'>
            <div className='row'>
              <div className='col-7'>
                <div className='checkout-left-data'>
                  <h3 className='website-name'>MarketPlace</h3>
                  <nav
                    style={{ "--bs-breadcrumb-divider": ">" }}
                    aria-label='breadcrumb'
                  >
                    <ol class='breadcrumb'>
                      <li class='breadcrumb-item'>
                        <Link
                          to='/cart'
                          className='text-dark total-price'
                        >
                          Cart
                        </Link>
                      </li>
                      &nbsp; /
                      <li
                        class='breadcrumb-item total-price  active'
                        aria-current='page'
                      >
                        Information
                      </li>
                      &nbsp; /
                      <li class='breadcrumb-item total-price '>Shipping</li>
                      &nbsp; /
                      <li
                        class='breadcrumb-item total-price '
                        aria-current='page'
                      >
                        Payment
                      </li>
                    </ol>
                  </nav>
                  <h4 className='title total'>Contact Information</h4>
                  <p className='user-details totak'>Name and emsil</p>
                  <h4 className='mb-3'>Shipping Address</h4>
                  <form
                    action=''
                    className='d-flex flex-wrap gap-15 justify-content-between'
                  >
                    <div className='w-100'>
                      <select
                        name=''
                        id=''
                        className='form-control form-select '
                      >
                        <option
                          value=''
                          selected
                          disabled
                        >
                          Select Country
                        </option>
                      </select>
                    </div>
                    <div className='flex-grow-1'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='First Name'
                      />
                    </div>
                    <div className='flex-grow-1'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Last Name'
                      />
                    </div>
                    <div className='w-100'>
                      <input
                        type='text'
                        placeholder='Address'
                        className='form-control'
                      />
                    </div>
                    <div className='w-100'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Apartment, Suite, etc'
                      />
                    </div>
                    <div className='flex-grow-1'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='City'
                      />
                    </div>
                    <div className='flex-grow-1'>
                      <select
                        name=''
                        id=''
                        className='form-control form-select '
                      >
                        <option
                          value=''
                          selected
                          disabled
                        >
                          Select State
                        </option>
                      </select>
                    </div>
                    <div className='flex-grow-1'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Zip Code'
                      />
                    </div>
                    <div className='w-100'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <Link
                          to='/cart'
                          className='text-dark'
                        >
                          <BiArrowBack className='me-2' />
                          Return to cart
                        </Link>
                        <Link
                          to='/'
                          className='button'
                        >
                          Continue to shipping
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className='col-5'>
                <div className='border-bottom py-4'>
                  <div className='d-flex gap-10 align-items-center'>
                    <div className='w-75 mb-2 d-flex gap-10'>
                      <div className='w-25 position-relative'>
                        <span
                          style={{ top: "2px", right: "2px" }}
                          className='badge bg-secondary text-white rounded-circle p-2 position-absolute'
                        >
                          1
                        </span>
                        <img
                          src={Watch}
                          className='img-fluid'
                          alt='product'
                        />
                      </div>
                      <div>
                        <h5 className='total-price'>Cool Watch</h5>
                        <p className='total-price'>s / Iamawesome</p>
                      </div>
                    </div>
                    <div className='flex-grow-1'>
                      <h5 className='total'>$100</h5>
                    </div>
                  </div>
                </div>
                <div className='border-bottom py-4'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='total'>Subtotal</p>
                    <p className='total-price'>$10000</p>
                  </div>
                </div>
                <div>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0'>Shipping</p>
                    <p className='mb-0'>$10000</p>
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                  <h4 className='total'>Total</h4>
                  <h5 className='total-price'>$10000</h5>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Checkout;
