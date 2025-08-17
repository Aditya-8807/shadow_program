import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const carouselImages = [
  '/images/bajaj auto (2).png',
  '/images/bse.png',
  '/images/cdsl.png',
  '/images/delloite.png',
  '/images/fynd.png',
  '/images/hindustan unilever.png',
  '/images/Larsen & Toubro.png',
  '/images/NSE.png',
  '/images/scheinder electric.png',
  '/images/state bank of india.png',
  '/images/world quant.png'

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
        <h1>Shadow Showcase</h1>
        <h4>Excursions that expand knowledge beyond the classroom</h4></div>
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