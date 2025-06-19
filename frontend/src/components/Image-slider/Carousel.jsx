import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const carouselImages = [
  "/images/Deloitte.png",
  "/images/L&T.png",
  "/images/WorldQuant.png",
  "/images/sarclogo.png"
  // Add more URLs as needed
];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: Math.min(3, carouselImages.length),
    infinite: carouselImages.length > 1,
    arrows: false,
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
          slidesToShow: Math.min(3, carouselImages.length),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="carousel-container" role="region" aria-label="Event images carousel">
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