import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import { Container } from "react-bootstrap";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle, BiPhoneCall } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title='Contact Us' />

      <div className='contact-wrapper py-5 home-wrapper-2'>
        <Container fluid='lg'>
          <div className='row'>
            <div className='col-12'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.954841037426!2d5.607675214770049!3d6.399820795369374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3014e1c75cf%3A0x5f3cd0b086c0e598!2sUniversity%20of%20Benin!5e0!3m2!1sen!2sng!4v1677396167190!5m2!1sen!2sng'
                width='600'
                height='450'
                className='border-0 w-100'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='map'
              ></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form
                    action=''
                    className='d-flex flex-column gap-15'
                  >
                    <div>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Name'
                      />
                    </div>
                    <div>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email'
                      />
                    </div>
                    <div>
                      <input
                        type='tel'
                        className='form-control'
                        placeholder='Phone Number'
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
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineHome className='fs-5' />
                        <address className='mb-0'>
                          A Townhall different Lagos Nigeria
                        </address>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href='tel:234749380327'>+234 749 380 327</a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <AiOutlineMail className='fs-5' />
                        <a href='mailto:townhallmarketplace@gmail.com'>
                          townhallmarketplace@gmail.com
                        </a>
                      </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'>
                        <BiInfoCircle className='fs-5' />
                        <p className='mb-0'>Monday to Friday 10AM to 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
