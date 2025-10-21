import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          TalentPro
        </Link>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/')}`} onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={toggleMenu}>
            About
          </Link>
          <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={toggleMenu}>
            Services
          </Link>
          <Link to="/jobs" className={`nav-link ${isActive('/jobs')}`} onClick={toggleMenu}>
            Jobs
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={toggleMenu}>
            Contact
          </Link>
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
