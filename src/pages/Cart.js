import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/meta";
import Watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title='Cart' />

      <section className='cart-wrapper home-wrapper-2 py-5'>
        <Container fluid='lg'>
          <Row>
            <Col>
              <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                <h4>Product</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Total</h4>
              </div>
              <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
                <div className='cart-col-1 d-flex gap-15 align-items-center'>
                  <div className='w-25'>
                    <img
                      src={Watch}
                      className='img-fluid'
                      alt='product'
                    />
                  </div>
                  <div className='w-75'>
                    <p>dviaed</p>
                    <p>ef</p>
                    <p>ef</p>
                  </div>
                </div>
                <div className='cart-col-2 d-flex align-items-center justify-content-center gap-15'>
                  <h5 className='price'>$ 100</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div>
                    <input
                      type='number'
                      className='form-control'
                      min={1}
                    />
                  </div>
                  <div>
                    <AiFillDelete className='text-danger p-3' />
                  </div>
                </div>
                <div className='cart-col-4'>
                  <h5 className='price'>$ 100</h5>
                </div>
              </div>
            </Col>
            <div className='col-12 py-2'>
              <div className='d-flex justify-content-between align-items-baseline'>
                <Link
                  to='/product'
                  className='button mt-4'
                >
                  Continue Shopping
                </Link>
                <div className='d-flex flex-column align-items-end'>
                  <h4>SubTotal: $400</h4>
                  <p>Taxes and Shipping calculated at checkout</p>
                  <Link
                    to='/checkout'
                    className='button'
                  >
                    CheckOut
                  </Link>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Cart;
