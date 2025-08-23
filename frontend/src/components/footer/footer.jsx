import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  const [repeatCount, setRepeatCount] = useState(5);

  const marqueeText = "Connecting students and alumni across generations...";

  // Back-to-top button toggle
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamically calculate how many times to repeat text
  useEffect(() => {
    const calculateRepeat = () => {
      const charWidthEstimate = 12; // approx px per character
      const textLength = marqueeText.length * charWidthEstimate;
      const count = Math.ceil(window.innerWidth / textLength) + 4; // +4 buffer
      setRepeatCount(count);
    };

    calculateRepeat();
    window.addEventListener("resize", calculateRepeat);
    return () => window.removeEventListener("resize", calculateRepeat);
  }, [marqueeText]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate repeated text dynamically
  const repeatedMarqueeText = Array(repeatCount)
    .fill(marqueeText + " \u00A0 ")
    .join("");

  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <img src="../images/sarclogo.png" alt="SARC Logo" className="logo" />
          <nav className="footer-nav">
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
            <span>|</span>
            <Link to="/PastEvent" onClick={scrollToTop}>
              Past Events
            </Link>
            <span>|</span>
            <Link to="/TeamPage" onClick={scrollToTop}>
              Team
            </Link>
            <span>|</span>
            <Link to="/register" onClick={scrollToTop}>
              Register
            </Link>
          </nav>
        </div>

        <div className="footer-center">
          <div className="contact-item">
            <FaMapMarkerAlt className="footer-icon" />
            <span>SARC Room, SAC, IITB</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="footer-icon" />
            <span>
              Aastha Maliwal: +91 94035 21022
              <br />
              Aadit Sule: +91 84595 39918
            </span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="footer-icon" />
            <a href="mailto:web@sarc-iitb.org">web@sarc-iitb.org</a>
          </div>
        </div>

        <div className="footer-right">
          <p className="sarc-heading">SARC</p>
          <p className="description">
            Stay connected beyond your college years with SARC and keep the good
            times rolling! From campus life to post-grad success, we have got
            you covered.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/SARC.IITB/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/sarc_iitb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://in.linkedin.com/company/student-alumni-relations-cell"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/c/SARCIITBombay"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Marquees centered and full width, below the flex row */}
        <div
          style={{
            width: "120vw",
            marginTop: "0.5rem",
            marginLeft: "-10vw",
            marginRight: "-10vw",
          }}
        >
          {/* Top Marquee */}
          <div
            style={{
              width: "100%",
              minWidth: "500px",
              margin: "0 auto",
              background: "#f2d298",
              borderRadius: "1px",
              boxShadow: "0 2px 8px rgba(26,35,126,0.10)",
              transform: "rotate(-3deg)",
              overflow: "hidden",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Marquee
              direction="right"
              gradient={false}
              speed={35}
              style={{
                color: "#1e1b2e",
                fontWeight: 700,
                fontSize: "1.1em",
                padding: "0.25rem 0",
              }}
            >
              {repeatedMarqueeText}
            </Marquee>
          </div>

          {/* Bottom Marquee */}
          <div
            style={{
              width: "100%",
              minWidth: "500px",
              margin: "-1.5rem auto 0 auto",
              background: "#f2d298",
              borderRadius: "1px",
              boxShadow: "0 2px 8px rgba(26,35,126,0.10)",
              transform: "rotate(3deg)",
              overflow: "hidden",
              position: "relative",
              zIndex: 2,
            }}
          >
            <Marquee
              direction="right"
              gradient={false}
              speed={35}
              style={{
                color: "#1e1b2e",
                fontWeight: 700,
                fontSize: "1.1em",
                padding: "0.25rem 0",
              }}
            >
              {repeatedMarqueeText}
            </Marquee>
          </div>
        </div>
      </footer>

      {showButton && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span className="arrow">↑ </span>
          <span className="text">Back to Top</span>
        </button>
      )}
    </>
  );
}
