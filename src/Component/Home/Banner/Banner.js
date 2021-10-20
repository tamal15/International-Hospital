import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../images/slider1.jpg';
import slider2 from '../../../images/slider2.jpg';
import slider3 from '../../../images/slider3.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <div>

<Carousel>
  <Carousel.Item className="carousel-design">
  <img
      className="d-block w-100"
      src={slider1}
      alt="First slide"
    />
  
  
    <Carousel.Caption className="styles">
      <h3 className="text-dark">Welcme to our Medical care center</h3>
      <p className="text-dark">We take care our patients health.</p>
      <button className="banner bg-dark text-white">About us</button>
      <button className="banners  text-white">Our Services</button>
    </Carousel.Caption>
  

   
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3 className="text-dark">Welcme to our Medical care center</h3>
      <p className="text-dark">We take care our patients health.</p>
      <button className="banner bg-dark text-white">About us</button>
      <button className="banners  text-white">Our Services</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slider3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3 className="text-dark">Welcme to our Medical care center</h3>
      <p className="text-dark">We take care our patients health.</p>
      <button className="banner bg-dark text-white">About us</button>
      <button className="banners  text-white">Our Services</button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    );
};

export default Banner;