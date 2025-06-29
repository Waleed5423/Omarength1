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
        <div className="d-flex justify-content-center mb-3"></div>
        <p className="mb-0 fs-6">
          &copy; 2025 Omerength. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
