import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './SlideShow.css'

export default function SlideShow() {
  return (
    <div className="slideShow">
      <Carousel>
      <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/book-poster/slide5.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/book-poster/slide1.PNG"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/book-poster/slide2.PNG"
            alt="Second slide"
            
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="/book-poster/slide3.PNG"
            alt="Third slide"
           
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
