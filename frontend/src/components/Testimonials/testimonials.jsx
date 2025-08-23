import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css";

const testimonials = [
  {
    name: "Mridul  Mangal",
    company: "Deloitte",
    text: "It was an enriching experience—interacting with alumni gave me real insights into M&A consulting and strengthened my interest in the field.",
  },
  {
    name: "Sachin Sharma",
    company: "Bajaj Auto ",
    text: "The Bajaj Auto shadow program offered great exposure to core mechanical engineering and electric mobility. Learning about the Chetak EV and witnessing the full manufacturing and electrical processes was an invaluable experience.",
  },
  {
    name: "Vipul Ahuja",
    company: "World Quant",
    text: "Program gave me valuable insight into quantitative finance, where data, AI, and research drive investments, while the welcoming culture made the experience memorable",
  },
  {
    name: "Komal yadav",
    company: "NSE",
    text: "It offered insights into trading, clearing, and settlement while showcasing the scale and pace of India’s largest exchange. The interactive discussions made the visit both exciting and educational.",
  },
  {
    name: "Kapil Chhipa",
    company: "FYND",
    text: "The Shadow Program at Fynd gave me real workplace insights, valuable mentorship, and clarity on career paths beyond classroom learning",
  },
];

export default function Testimonials() {
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
    slidesToShow: Math.min(3, testimonials.length),
    focusOnSelect: true,
    swipeToSlide: true,
    infinite: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
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
          centerMode: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          centerPadding: "130px",

          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: false,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "60px",

          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: false,
          infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          centerPadding: "35px",

          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="testimonials-section">
      <h1 className="heading">Testimonials</h1>
      <h4 className="subheading">Hear it from those who’ve been there</h4>
      <Slider {...settings} className="slider">
        {testimonials.map((t, index) => {
          const isActive = index === currentSlide % testimonials.length;
          return (
            <div key={index} className="testimonial-slide">
              <div className={`testimonial-card ${isActive ? "active" : ""}`}>
                <div className="quote-box">
                  <p className="quote">{t.text}</p>
                  <div className="profile-text-bottom">
                    <p className="name">{t.name}</p>
                    <p className="company">{t.company}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <div className="slider-bar-dots">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`bar ${
              idx === currentSlide % testimonials.length ? "active" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
