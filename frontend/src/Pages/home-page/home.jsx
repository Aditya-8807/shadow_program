import { useNavigate } from "react-router-dom";
import "./home.css";
import Carousel from "../../components/Image-slider/Carousel";
import Card from "../../components/home-card/card";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/faq";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="app">
      <div className="home-container">
        <div className="block1">
          <div>
            <h1 className="ShadowTitle">Shadow Program</h1>
            <p className="info">
              The Shadow Program, organized by the Student Alumni Relations Cell
              (SARC), is a one-day initiative that connects students with
              distinguished alumni in their workplaces. It offers firsthand
              exposure to real-world work environments, helping bridge the gap
              between academics and industry.
            </p>
            <button
              className="b1"
              onClick={() => navigate("/RegistrationPage")}
            >
              Register Now
            </button>
            <button className="b2" onClick={() => navigate("/PastEvent")}>
              Past Shadows
            </button>
          </div>
          <img
            src="/images/img6.JPG"
            alt="Student visiting workplace of alumni"
            loading="lazy"
          />
        </div>

        <div className="container1">
          <Card />
          <Carousel />
          {/* Give this wrapper the id for scrolling */}
          <div id="faq">
            <FAQ />
          </div>
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
