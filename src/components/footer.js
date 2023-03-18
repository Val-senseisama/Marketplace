import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <Container>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-5'>
                <div className='footer-top-data d-flex gap-30 align-items-center'>
                  <img
                    src='images/newsletter.png'
                    alt='Newsletter'
                  />
                  <h2 className='mb-0 text-white'>
                    Suscribe to our Newsletter
                  </h2>
                </div>
              </div>
              <div className='col-7'>
                <div className='input-group'>
                  <input
                    type='text'
                    className='form-control py-1'
                    placeholder='Email'
                    aria-label='Email'
                    aria-describedby='basic-addon2'
                  />
                  <span
                    className='input-group-text p-2'
                    id='basic-addon2'
                  >
                    Suscribe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <footer className='py-4'>
        <Container>
          <div className='container-xxll'>
            <div className='row'>
              <div className='col-4'>
                <h4 className='text-white mb-4'>Contact Us</h4>
                <div>
                  <address className='text-white fs-6'>
                    HQtrs. : A Townhall different <br />
                    Lagos Nigeria <br />
                    PO Box: 261872
                  </address>
                  <a
                    href='tel:+234 749380327'
                    className='d-block mb-0 text-white mt-3'
                  >
                    +234 352 638 2468
                  </a>
                  <a
                    href='mailto:ownhallmarketplace@gmail.com'
                    className='d-block mb-0 text-white mt-2'
                  >
                    townhallmarketplace@gmail.com
                  </a>
                  <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                    <a
                      href='/'
                      className='text-white'
                    >
                      <BsLinkedin className='fs-4' />
                    </a>
                    <a
                      href='/'
                      className='text-white'
                    >
                      <BsInstagram className='fs-4' />
                    </a>
                    <a
                      href='/'
                      className='text-white'
                    >
                      <BsGithub className='fs-4' />
                    </a>
                    <a
                      href='/'
                      className='text-white'
                    >
                      <BsYoutube className='fs-4' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <h4 className='text-white mb-4'>Information</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link
                    to='/privacy-policy'
                    className='text-white mb-2 py-1'
                  >
                    Privacy policy
                  </Link>
                  <Link
                    to='/refund-policy'
                    className='text-white mb-2 py-1'
                  >
                    Refund policy
                  </Link>
                  <Link
                    to='/shipping-policy'
                    className='text-white mb-2 py-1'
                  >
                    Shipping Policy
                  </Link>
                  <Link
                    to='/terms-and-conditions'
                    className='text-white mb-2 py-1'
                  >
                    Terms & Conditions
                  </Link>
                  <Link className='text-white mb-2 py-1'>Blog</Link>
                </div>
              </div>
              <div className='col-3'>
                <h4 className='text-white mb-4'>Account</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white mb-2 py-1'>About Us</Link>
                  <Link className='text-white mb-2 py-1'>FAQ</Link>
                  <Link className='text-white mb-2 py-1'>Contact</Link>
                </div>
              </div>
              <div className='col-2'>
                <h4 className='text-white mb-4'>Quick Links</h4>
                <div className='footer-links d-flex flex-column'>
                  <Link className='text-white mb-2 py-1'>Laptops</Link>
                  <Link className='text-white mb-2 py-1'>Headphones</Link>
                  <Link className='text-white mb-2 py-1'>Tablets</Link>
                  <Link className='text-white mb-2 py-1'>Watches</Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <footer className='py-4'>
        <Container>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                <p className='text-center text-white mb-0'>
                  &copy; {new Date().getFullYear()} Powered by XaviTechSavy
                </p>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
