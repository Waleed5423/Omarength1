import React from "react";
import "./Banner.css"

const Banner = () => {
  return (
    <section class="hero-section d-flex align-items-center justify-content-center text-center ">
      <div class="overlay"></div>
      <div class="content">
        <h1>REGISTRATION NOW TO GET MORE DEALS</h1>
        <p>WHERE HEALTH, BEAUTY AND FITNESS MEET.</p>
        <a href="#" class="btn btn-outline-light">
          APPOINTMENT
        </a>
      </div>
    </section>
  );
};

export default Banner;
