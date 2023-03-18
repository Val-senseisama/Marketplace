import React from 'react';
import { Container } from "react-bootstrap"; 
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
      <Container fluid='xl'>
        <div className="container-xl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="Main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 or $42.10/month</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small-banner position-relative ">
                <img src="images/catbanner-01.jpg"
                 className='img-fluid rounded-3'
                  alt="Main banner"
                   />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Laptops Max</h5>
                  <p>From $999.00 <br /> or $42.10/month</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-02.jpg"
                 className='img-fluid rounded-3'
                  alt="Main banner"
                   />
                <div className="small-banner-content position-absolute">
                  <h4>10% Off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>Shop the latest Band <br /> styles and colors</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-03.jpg"
                 className='img-fluid rounded-3'
                  alt="Main banner"
                   />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrivals</h4>
                  <h5>Buy iPad Air</h5>
                  <p>From $999.00 <br /> or $42.10/month</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-04.jpg"
                 className='img-fluid rounded-3'
                  alt="Main banner"
                   />
                <div className="small-banner-content position-absolute">
                  <h4>Free Shipping</h4>
                  <h5>Headphones</h5>
                  <p>High quality playback <br /> and ultralow distortion</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      </section>

      <section className="home-wrapper-2 py-5">
        <Container fluid='xl'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="Services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">For all orders over $50</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="Services" />
                  <div>
                    <h6>Daily Surprise offers</h6>
                    <p className="mb-0">Up to 25% Off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="Services" />
                  <div>
                    <h6>24-7 Support</h6>
                    <p className="mb-0">Shop with Experts</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="Services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Buy more for less</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="Services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">%100 sure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        </Container>
      </section>

      <section className="home-wrapper-2 py-5">
        <Container>
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className='d-flex gap-20 align-items-center'>
                  <div>
                   <h6>Music & Gaming</h6>
                   <p>10 Units</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className='d-flex gap-20 align-items-center'>
                  <div>
                   <h6>Smart Tv</h6>
                   <p>10 Units</p>
                  </div>
                  <img src="images/Tv.jpg" alt="Camera" />
                </div>
                <div className='d-flex gap-20 align-items-center'>
                  <div>
                   <h6>Headphones</h6>
                   <p>10 Units</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Camera" />
                </div>
                <div className='d-flex gap-20 align-items-center'>
                  <div>
                   <h6>Cameras</h6>
                   <p>10 Units</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className='d-flex gap-20 align-items-center'>
                  <div>
                   <h6>Music & Gaming</h6>
                   <p>10 Units</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                <div className='d-flex gap-20 align-items-center'>
                  <div>
                   <h6>Smart Tv</h6>
                   <p>10 Units</p>
                  </div>
                  <img src="images/Tv.jpg" alt="Camera" />
                </div>
                <div className='d-flex gap-20 align-items-center'>
                  <div>
                   <h6>Headphones</h6>
                   <p>10 Units</p>
                  </div>
                  <img src="images/headphone.jpg" alt="Camera" />
                </div>
                <div className='d-flex gap-20 align-items-center'>
                  <div>
                   <h6>Cameras</h6>
                   <p>10 Units</p>
                  </div>
                  <img src="images/camera.jpg" alt="Camera" />
                </div>
                </div>
                
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="featured-wrapper py-5 home-wrapper-2">
        <Container fluid='lg'>
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Container>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <Container fluid='lg' className='container-xxl'>
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
              <img src="images/famous-1.webp" className='img-fluid' alt="Famous" />
                <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6 > Smart Watch Series 7</h6>
                <p>$320 0r $27 per month</p>
                </div>
              </div>
            </div>
            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-2.webp" className='img-fluid' alt="Famous" />
                <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio display</h5>
                <h6 className="text-dark"> 600 hours of brightness</h6>
                <p className="text-dark">$3220 0r $270 per month</p>
                </div>
              </div>
            </div>
            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-3.webp" className='img-fluid' alt="Famous" />
                <div className="famous-content position-absolute">
                <h5 className="text-dark">SmartPhones</h5>
                <h6 className="text-dark">Iphone 13 pro</h6>
                <p className="text-dark">Now in green from $1220 0r $112 per month</p>
                </div>
              </div>
            </div>
            <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-4.webp" className='img-fluid' alt="Famous" />
                <div className="famous-content position-absolute">
                <h5 className="text-dark">Home Speakers</h5>
                <h6 className="text-dark">Surround sound</h6>
                <p className="text-dark">$520 0r $48 per month</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <Container fluid="lg">
          <div className="row">
            <div className="col-12">
            <h3 className="section-heading">
            Special Products
            </h3>
            </div>
            <div className="row">
              <SpecialProducts />
              <SpecialProducts />
              <SpecialProducts />
              <SpecialProducts />
            </div>
          </div>
        </Container>
      </section>

      <section className="popular-wrapper py-5 home-wrapper-2">
        <Container fluid='lg'>
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Trending products</h3>
          </div>
            <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            </div>
          </div>
        </Container>
      </section>

      <section className="marquee-wrapper home-wrapper-2 py-5">
        <Container fluid='lg'>
          <div className="row">
            <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper p-3">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src="images/brand-01.png" alt="Brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-02.png" alt="Brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-03.png" alt="Brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-04.png" alt="Brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-05.png" alt="Brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-06.png" alt="Brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-07.png" alt="Brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-08.png" alt="Brand" />
                </div>
              </Marquee>
            </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <Container fluid='xl'>
          <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>        
          </div>
        </Container>
      </section>
    </>
  )
}

export default Home
