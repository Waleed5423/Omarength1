import React from "react";
import "./Banner.css";

const Banner = ({ contactRef }) => {
  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>
      <div className="content">
        <h1>REGISTER NOW TO EMBARK YOUR FITNESS JOURNEY</h1>
        <p>WHERE HEALTH, BEAUTY AND FITNESS MEET.</p>
        <button
          onClick={handleScrollToContact}
          className="btn btn-outline-light"
        >
          Contact
        </button>
      </div>
    </section>
  );
};

export default Banner;
