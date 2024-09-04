import React from "react";
import img from "../../Media/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-light py-4 mt-5">
      <div className="container text-center">
        <div className="d-flex justify-content-center">
          <img src={img} alt="Logo" className="mb-3 w-25 d-md-block d-none" />
          <img src={img} alt="Logo" className="mb-3 w-75   d-md-none" />
        </div>
        <div className="d-flex justify-content-center mb-3">
          <div className="social-icons me-3">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
        <p className="mb-0">
          &copy; 2024 Omerength. All rights reserved.{" "}
          <a href="www.wdp-123.netlify.app" className="about">
            Wdp
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
