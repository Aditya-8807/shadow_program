import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.css";

const testimonials = [
    {
        name: "Jane Rowling",
        role: "Copywriter",
        text:
            "The new OptinMonster with the web backend is just amazing. We found an easier and more effective way to increase subscribers. Worth every penny!",
        image: "/images/Deloitte.png",
    },
    {
        name: "Emilia Bubu",
        role: "UI/UX Designer",
        text:
            "I was once a disbeliever myself. I didn’t like popups at all. But we doubled our email signups, so the results speak for themselves. It just works. OptinMonster is super easy and worth the money.",
        image: "/images/L&T.png",
    },
    {
        name: "Judy Dawson",
        role: "Prod Developer",
        text:
            "OptinMonster brought me more subscribers, which is a given, but what’s more important is the ease of setup and amazing support.",
        image: "/images/WorldQuant.png",
    },
    {
        name: "Alex Moore",
        role: "Marketer",
        text:
            "This tool boosted my conversions and made email collection effortless. Highly recommended!",
        image: "/images/Extra1.png",
    },
    {
        name: "Riya Kapoor",
        role: "Freelancer",
        text:
            "Super intuitive and effective. The design is clean, and performance is top-notch!",
        image: "/images/Extra2.png",
    },
];

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: Math.min(3, testimonials.length),
        focusOnSelect: true,
        swipeToSlide: true,
        infinite: true,
        arrows: false,
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
                breakpoint: 900,
                settings: {
                    centerPadding: "130px",

                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    dots: false,
                    infinite: true,
                }
            }
            , {
                breakpoint: 768,
                settings: {
                    centerPadding: "60px",

                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    dots: false,
                    infinite: true,
                }
            }, {
                breakpoint: 500,
                settings: {
                    centerPadding: "35px",

                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    dots: false,
                    infinite: true,
                }
            }
        ],
    };

    return (
        <div className="testimonials-section">
            <h1 className="heading">Testimonials</h1>
            <h4 className='subheading'>Glimpses of transformation — one testimony at a time.</h4>
            <Slider {...settings} className="slider" >
                {testimonials.map((t, index) => {
                    const isActive = index === currentSlide % testimonials.length;
                    return (
                        <div key={index} className="testimonial-slide">
                            <div className={`testimonial-card ${isActive ? "active" : ""}`}>
                                <div className="quote-box">
                                    <p className="quote">“{t.text}”</p>
                                </div>
                                <div className="profile-wrapper">
                                    <img src={t.image} alt={t.name} className="profile-img" />
                                    <div className="profile-text">
                                        <p className="name">{t.name}</p>
                                        <p className="role">{t.role}</p>
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
                        className={`bar ${idx === currentSlide % testimonials.length ? "active" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
}