import React from "react";
import img from "../../Media/logo.png";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-light py-4 ">
      <div className="container text-center">
        <div className="d-flex justify-content-center">
          <img src={img} alt="Logo" className="mb-3 w-25 d-md-block d-none" />
          <img src={img} alt="Logo" className="mb-3 w-75   d-md-none" />
        </div>
        <div className="d-flex justify-content-center mb-3">
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
        <p className="mb-0 fs-6">
          &copy; 2024 Omerength. All rights reserved.{" "}
          
        </p>
      </div>
    </footer>
  );
};

export default Footer;
