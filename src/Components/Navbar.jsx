import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu when link is clicked
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" width="50" height="50" />
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <h1>Seistar</h1>
          </Link>
        </div>
       
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="/introduction"
              onClick={() => handleLinkClick('/introduction')}
              style={{ color: activeLink === '/introduction' ? 'white' : 'white', textDecoration: 'none' }}
            >
              Introduction
            </Link>
          </li>
          <li>
            <Link
              to="/analysis"
              onClick={() => handleLinkClick('/analysis')}
              style={{ color: activeLink === '/analysis' ? 'white' : 'white', textDecoration: 'none' }}
            >
              Analysis
            </Link>
          </li>
          <li>
            <Link
              to="/reference"
              onClick={() => handleLinkClick('/reference')}
              style={{ color: activeLink === '/reference' ? 'white' : 'white', textDecoration: 'none' }}
            >
              Reference
            </Link>
          </li>
          <li>
          <Link
  to="https://colab.research.google.com/drive/15N9bKSY_803tCLicaLFu_12eFHlj2KP5?usp=sharing"
  onClick={() => handleLinkClick('/')}
  style={{ 
    color: activeLink === '/' ? 'white' : 'white', 
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px'
  }}
>
  Collab
  <ArrowUpRight style={{ width: '24px', height: '24px' }} />
</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
