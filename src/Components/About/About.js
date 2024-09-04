import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="text-center container pt-md-5 px-md-5 fs-5 d-none d-md-block">
        <h1 className="abouts py-md-2">OUR APPROACH</h1>
        <p className="second-text text-white px-md-5">
          Welcome to the Omarength Program, a revolutionary online fitness
          experience that merges science and technology to help you achieve your
          body transformation goals within a matter of months. This organization
          is led by a dynamic team that includes two data scientists and one
          professional trainer, Omar Khalid. Our mission is to empower you on
          your journey towards optimal health and strength through a
          scientifically proven and meticulously researched workout and
          nutrition program.
        </p>
      </div>

      <div className="text-md-center container pt-md-5 ps-md-0 px-4 fs-6 d-md-none">
        <h1 className="abouts ps-md-0 ps-2 py-md-4">OUR APPROACH</h1>
        <p className="second-text text-white fs-5 px-md-5 px-2">
          Welcome to the Omarength Program, a revolutionary online fitness
          experience that merges science and technology to help you achieve your
          body transformation goals within a matter of months. This organization
          is led by a dynamic team that includes two data scientists and one
          professional trainer, Omar Khalid. Our mission is to empower you on
          your journey towards optimal health and strength through a
          scientifically proven and meticulously researched workout and
          nutrition program.
        </p>
      </div>
    </>
  );
};

export default About;
