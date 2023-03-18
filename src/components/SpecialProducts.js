import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const SpecialProducts = () => {
  return (
    <div className='col-6 mb-3'>
    <div className="special-product-card">
        <div className="d-flex justify-content-between">
            <div>
                <img src="images/watch.jpg" className='img-fluid' alt="" />
            </div>
            <div className="special-product-content">
                <h5 className="brand">Rolex</h5>
                <h6 className="title">
                    Samsung galaxy bulaba
                </h6>
                <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd760"/>
                <p className="price">
                <span className="red-p">$150</span> &nbsp; <strike>$200</strike>
                </p>
                <div className="discount-till d-flex align-items-center gap-10">
                    <p className='mb-0'><b>5 days</b></p>
                    <div className="d-flex gap-10 align-items-center">
                        <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                        <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                        <span className='badge rounded-circle p-3 bg-danger'>1</span>

                    </div>
                </div>
                <div className="prod-count mt-3">
                        <p>Products: 5</p>
                        <div className="progress">
                        <div class="progress-bar" role="progressbar" style={{"width": "25%" }}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <Link className='button my-3'>Add to Cart</Link>
            
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default SpecialProducts;

