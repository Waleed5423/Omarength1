import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import img from "../../Media/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeNavAndScroll = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);

    setNavActive(false); // Start closing the navbar

    // Wait for the closing animation to complete
    setTimeout(() => {
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 800); // Adjust the timeout duration based on your closing animation duration
  };

  useEffect(() => {
    // This effect runs only on the initial page load
    setInitialLoad(false);
  }, []);

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
          <a
            href="https://www.tiktok.com/@omarength"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/omarength/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <motion.div
        className="nav"
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav__content">
          <ul className="nav__list">
            <a
              style={{ textDecoration: "none" }}
              href="#home"
              onClick={closeNavAndScroll}
            >
              <li className="nav__list-item">Home</li>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="#services"
              onClick={closeNavAndScroll}
            >
              <li className="nav__list-item">Services</li>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="#pricing"
              onClick={closeNavAndScroll}
            >
              <li className="nav__list-item">Pricing</li>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="#reviews"
              onClick={closeNavAndScroll}
            >
              <li className="nav__list-item">Reviews</li>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="#contact"
              onClick={closeNavAndScroll}
            >
              <li className="nav__list-item">Contact</li>
            </a>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
