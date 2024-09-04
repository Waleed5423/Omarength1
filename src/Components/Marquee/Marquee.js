import React from "react";

const Marquee = () => {
  const items = [
    "OMERENGTH |YOUR PERSONAL TRAINER| ",
    "OMERENGTH |YOUR PERSONAL TRAINER| ",
    "OMERENGTH |YOUR PERSONAL TRAINER| ",
    "OMERENGTH |YOUR PERSONAL TRAINER| ",
  ];

  return (
    <div className="marquee-container  my-md-4 d-none d-md-flex">
      <div className="marquee my-md-2">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-dark fw-bolder fs-4 mx-2 font-monospace"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
