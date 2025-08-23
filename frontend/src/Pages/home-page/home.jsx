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
              onClick={() => navigate("/register")}
            >
              Register Now
            </button>
            <button className="b2" onClick={() => navigate("/PastEvent")}>
              Past Shadows
            </button>

          </div>
          <img
            src="/images/cdsl.png"
            alt="Student visiting workplace of alumni"
            loading="lazy"
          />
        </div>
        <div class="card_container">
          <div class="wrapper">

            <div class="event_card">

              <div class="card_content">

                <div class="logo_section">

                  <img src="/images/past_event/bse.png" alt="Company Logo" class="company-logo"></img>
                </div>

                <div class="info_section">
                  <h1 class="event_title">Shadow Program – Company Name</h1>

                  <div class="event_details">
                    <div class="detail_item">
                      <span class="detail_label">Venue:</span>
                      <span class="detail_value">LHC 101, IIT Bombay</span>
                    </div>
                    <div class="detail_item">
                      <span class="detail_label">Date:</span>
                      <span class="detail_value">25th August 2025</span>
                    </div>
                    <div class="detail_item">
                      <span class="detail_label">Time:</span>
                      <span class="detail_value">6:00 PM – 8:00 PM</span>
                    </div>
                    <div class="detail_item">
                      <p>Kindly note that the dress code will be semi-formal. Travel, along with breakfast, lunch, and snacks, will be taken care of by us.</p>
                    </div>
                  </div>


                  <div class="event_note">
                    <span class="note_label">Note:</span>
                    Open to all first & second year UG students
                  </div>

                </div>

              </div>

            </div>

          </div>
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
