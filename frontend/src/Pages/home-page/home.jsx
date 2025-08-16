import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./home.css";
import Carousel from "../../components/Image-slider/Carousel";
import Card from "../../components/home-card/card";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/faq";

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Create a ref for FAQ section
  const faqRef = useRef(null);

  useEffect(() => {
    // On URL hash change or page load, if hash is #faq, scroll FAQ into view
    if (location.hash === "#faq" && faqRef.current) {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="app">
      <div className="home-container">
        <div className="block1">
          {/* ... your existing block1 content ... */}
        </div>

        <div className="container1">
          <Card />
          <Carousel />

          {/* Attach ref to FAQ wrapper */}
          <div ref={faqRef} id="faq">
            <FAQ />
          </div>

          <Testimonials />
        </div>
      </div>
    </div>
  );
}
