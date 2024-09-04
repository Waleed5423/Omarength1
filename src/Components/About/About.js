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
          1-to-1 online personal training is the ultimate investment in your
          health. You'll be working directly with your coach, Omar Khalid,
          following a bespoke plan to ensure you hit your goals in record time.
          Whether you want to slim down, add muscle or anything in between, our
          personal training packages will get you there in a fun and sustainable
          way. We'll teach you how to take control of your health and weight,
          without relying on any specific diet or products, with our 1-to-1
          nutrition coaching.
        </p>
      </div>

      <div className="text-md-center container pt-md-5 ps-md-0 px-4 fs-6 d-md-none">
        <h1 className="abouts ps-md-0 ps-2 py-md-4">OUR APPROACH</h1>
        <p className="second-text text-white fs-5 px-md-5 px-2">
          1-to-1 online personal training is the ultimate investment in your
          health. You'll be working directly with your coach, Omar Khalid,
          following a bespoke plan to ensure you hit your goals in record time.
          Whether you want to slim down, add muscle or anything in between, our
          personal training packages will get you there in a fun and sustainable
          way. We'll teach you how to take control of your health and weight,
          without relying on any specific diet or products, with our 1-to-1
          nutrition coaching.
        </p>
      </div>
    </>
  );
};

export default About;
