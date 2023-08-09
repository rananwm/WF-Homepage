import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

export default function Header() {
  const [drawer, setDrawer] = useState(false);

  const closeDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className="container">
      <div className="nav">
        <input onClick={() => setDrawer(!drawer)} type="checkbox" id="nav-check" checked={drawer} />
        <div className="nav-header">
          <div className="nav-title">
            <Link to="/" onClick={closeDrawer}>
              <img className='logo' src={Logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <Link to="/aboutus" onClick={closeDrawer}>
            About us
          </Link>
          <Link to="/products" onClick={closeDrawer}>
            Products/Services
          </Link>
          <Link to="/people" onClick={closeDrawer}>
            People
          </Link>
          <Link to="/verticles" onClick={closeDrawer}>
            Verticles
          </Link>
          <Link to="/" onClick={closeDrawer}>
            Blog
          </Link>
          <Link to="/contactus" onClick={closeDrawer}>
            Contact Us
          </Link>
          <Link to="/contact" onClick={closeDrawer}>
            <div className="button-container">
              <div className="nav-button">Contact Us</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
