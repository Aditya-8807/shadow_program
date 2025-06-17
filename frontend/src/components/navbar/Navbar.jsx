import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import sarcLogo from './sarc_logo_white.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="logo-container">
        <Link to="/" className="Logo" onClick={closeMenu} aria-label="Homepage">
          <img src={sarcLogo} alt="SARC Logo" className="sarc-logo" />
          Shadow Program
        </Link>
      </div>

      {/* Hamburger Icon for smaller screens */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        ☰
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/PastEventPage" onClick={closeMenu}>Past Events</Link></li>
        <li><Link to="/TeamPage" onClick={closeMenu}>Team</Link></li>
        <li><Link to="/RegistrationPage" className="register" onClick={closeMenu}>Register</Link></li>
      </ul>
    </nav>
  );
}