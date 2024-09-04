import React from "react";
import img from "../../Media/profile3.jpg";

const Profile = () => {
  return (
    <>
      <div className="service-heading text-center text-uppercase pt-4 pb-4" id="aboutus">
        <h6>About me</h6>
        <h3 className="text-light">Know me more</h3>
      </div>
      <div className="container mt-md-3  mb-1 text-light">
        <div className="row mx-md-5 px-md-5 px-2">
          <div className="col-md-4 text-center">
            <img src={img} alt="Profile" className="img-fluid " />
          </div>
          <div className="col-md-8 px-md-4 ps-4 mt-md-3 mt-4">
            <h2 className="about fs-1">OMAR KHALID</h2>
            <p className="fs-5">
              As a professional fitness trainer, my aim is to help you achieve
              your dream physique through a personalized fitness plan designed
              just for you. From the basics to advanced techniques, I’ll guide
              you every step of the way, ensuring you have all the knowledge and
              support you need to transform your body and reach
              your fitness goals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
