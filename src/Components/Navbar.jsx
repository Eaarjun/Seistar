import React, { useState } from 'react'
import './Navbar.css';
import '../App.css'
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import { ArrowUpRight  } from 'lucide-react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
        <div>

      <nav className="navbar">
        {/* Your Navbar content here */}
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" width="50" height="50" />
          <Link to={"/"} style={{ textDecoration: 'none',color: 'white' }}>
          <h1 >Seistar</h1>
          </Link>
        </div>
        <ul className="nav-links">
          {/* Introduction */}
          <li>
          <Link
            to="/introduction"
            onClick={() => handleLinkClick('/introduction')}
            style={{ color: activeLink === '/introduction' ? 'white' : 'white', textDecoration: 'none' }}
          > Introduction
          </Link>
           </li>
         {/* Analysis */}
         <li>
          <Link
            to="/analysis"
            onClick={() => handleLinkClick('/analysis')}
            style={{ color: activeLink === '/analysis' ? 'white' : 'white', textDecoration: 'none' }}
          > Analysis
          </Link>
           </li>

         {/* Reference  */}
         <li>
          <Link
            to="/reference"
            onClick={() => handleLinkClick('/reference')}
            style={{ color: activeLink === '/reference' ? 'white' : 'white', textDecoration: 'none' }}
          > Reference
          </Link>
           </li>
           {/* Google collab  */}
           <li>
          <Link
            to="https://colab.research.google.com/drive/15N9bKSY_803tCLicaLFu_12eFHlj2KP5?usp=sharing"
            onClick={() => handleLinkClick('/')}
            style={{ color: activeLink === '/' ? 'white' : 'white', textDecoration: 'none' }}
          > Collab 
          <ArrowUpRight />
          </Link>
           </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Navbar