import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <img src="../images/sarclogo.png" alt="SARC Logo" className="logo" />
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <span>|</span>
            <Link to="/PastEventPage">Past Events</Link>
            <span>|</span>
            <Link to="/TeamPage">Team</Link>
            <span>|</span>
            <Link to="/RegistrationPage">Register</Link>
          </nav>
        </div>

        <div className="footer-center">
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>SARC Room, SAC, IITB</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span>
              Arush Srivastav: +91 9005549919<br />
              Khushi Yadav: +91 8930097733
            </span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:web@sarc-iitb.org">web@sarc-iitb.org</a>
          </div>
        </div>

        <div className="footer-right">
          <p className="sarc-heading">SARC</p>
          <p className="description">
            Stay connected beyond your college years with SARC and keep the good times rolling! From campus life to post-grad success, we have got you covered.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/SARC.IITB/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/sarc_iitb/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://in.linkedin.com/company/student-alumni-relations-cell" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/c/SARCIITBombay" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </footer>

      {showButton && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          ↑ Back to Top
        </button>
      )}
    </>
  );
}