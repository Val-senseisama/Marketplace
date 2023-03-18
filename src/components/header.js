import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { Container } from "react-bootstrap";
import Compare from "../images/compare.svg";
import Wishlist from "../images/wishlist.svg";
import Cart from "../images/cart.svg";
import User from "../images/user.svg";
import Menu from "../images/menu.svg";

const Header = () => {
  return (
    <>
      <header className='header-top-strip py-3'>
        <Container>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-6'>
                <p className=' text-white mb-0'>
                  Free shipping over $100 and free returns
                </p>
              </div>
              <div className='col-6'>
                <p className='text-end text-white mb-0'>
                  Hotline:{" "}
                  <a
                    className='text-white'
                    href='tel:+234 352 638 2468'
                  >
                    +234 352 638 2468
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <header className='header-upper py-3'>
        <Container className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h3>
                <Link className='text-white'>Marketplace</Link>
              </h3>
            </div>
            <div className='col-5'>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control py-2'
                  placeholder='Search products here'
                  aria-label='Search products here'
                  aria-describedby='basic-addon2'
                />
                <span
                  className='input-group-text p-3'
                  id='basic-addon2'
                >
                  <BsSearch fs='6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link
                    to='compare-product'
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img
                      src={Compare}
                      alt='Compare'
                    />
                    <p className='mb-0'>
                      Compare <br /> Products{" "}
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to='wishlist'
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img
                      src={Wishlist}
                      alt='Wishlist'
                    />
                    <p className='mb-0'>
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to='login'
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img
                      src={User}
                      alt='My account'
                    />
                    <p className='mb-0'>
                      Log In <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to='/cart'
                    className='d-flex align-items-center gap-10 text-white'
                  >
                    <img
                      src={Cart}
                      alt='cart'
                    />
                    <div className='d-flex flex-column'>
                      <span className='badge bg-white text-dark'>0</span>
                      <p className='mb-0'>$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <header className='header-bottom py-3'>
        <Container>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-15'>
                <div>
                  <div className='dropdown'>
                    <button
                      className='btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center'
                      type='button'
                      id='dropdownMenuButton1'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <img
                        src={Menu}
                        alt='menu'
                      />
                      <span className='me-5 d-inline-block'>Categories </span>
                    </button>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='dropdownMenuButton1'
                    >
                      <li>
                        <Link
                          className='dropdown-item'
                          to=''
                        >
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item'
                          to=''
                        >
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item'
                          to=''
                        >
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product'>Our Store</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
