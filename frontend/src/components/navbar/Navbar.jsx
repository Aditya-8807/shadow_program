import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import sarcLogo from "./sarc_logo_white.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const goToFAQ = () => {
    closeMenu();
    navigate("/");
    setTimeout(() => {
      const faqEl = document.getElementById("faq");
      if (faqEl) faqEl.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="logo-container">
        <Link to="/" className="Logo" onClick={closeMenu} aria-label="Homepage">
          <img src={sarcLogo} alt="SARC Logo" className="sarc-logo" />
          Shadow Program
        </Link>
      </div>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        ☰
      </button>

      <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu} className="btn">
            Home
          </Link>
        </li>
        <li>
          <Link to="/PastEvent" onClick={closeMenu} className="btn">
            Past Events
          </Link>
        </li>
        <li>
          <Link to="/TeamPage" onClick={closeMenu} className="btn">
            Team
          </Link>
        </li>
        <li>
          <a href="#faq-section" className="btn" onClick={goToFAQ}> FAQ</a>
        </li>
        <li>
          <Link
            to="/RegistrationPage"
            className="register btn"
            onClick={closeMenu}
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}