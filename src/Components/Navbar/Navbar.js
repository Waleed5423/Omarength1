import React, { useState } from "react";
import "./Navbar.css";
import { FaInstagram, FaTiktok } from 'react-icons/fa';

import img from "../../Media/logo.png";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <div className={navActive ? "body nav-active" : "body"}>
      <div className="header">
        <div className="toggler">
          <div className="menu-icon mx-3" onClick={toggleNav}>
            <span className="menu-icon__line menu-icon__line-left"></span>
            <span className="menu-icon__line"></span>
            <span className="menu-icon__line menu-icon__line-right"></span>
          </div>
        </div>
        <div className="logo">
          <img src={img} className="logo-img" alt="logo" />
        </div>
        <div className="social-icons me-3">
          <FaTiktok />
          <FaInstagram />
        </div>
      </div>
      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item">Home</li>
            <li className="nav__list-item">About</li>
            <li className="nav__list-item">Projects</li>
            <li className="nav__list-item">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
