import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const carouselImages = [
  '/images/img1.JPG',
  '/images/img2.JPG',
  '/images/img3.JPG',
  '/images/img6.JPG',
  '/images/img5.JPG'
  // Add more URLs as needed
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow left-arrow" onClick={onClick}>
    &#10094;
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow right-arrow" onClick={onClick}>
    &#10095;
  </div>
);

  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: Math.min(3, carouselImages.length),
    infinite: carouselImages.length > 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    dots: false,
    swipeToSlide: true,
    focusOnSelect: true,
    speed: 500,
    // autoplay: true,
    beforeChange: (_, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "60px",

          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "60px",

          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          dots: false,
          autoplay: true,
        }
      }
    ]
  };


  return (
    <div className="carousel-container" role="region" aria-label="Event images carousel">
      <div className='gallery'>
        <h1>Past Memories</h1>
        <h4>Moments that mentored. Memories that mattered.</h4></div>
      <Slider {...settings}>
        {carouselImages.map((img, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={index}
              className={`slide ${isActive ? "active-slide" : "blurred-slide"}`}
              aria-hidden={!isActive}
            >
              <img
                src={img}
                alt={`Event ${index + 1}`}
                className="carousel-image"
                draggable={false}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}