import React from "react";
import "./Packages.css";

const cardData = [
  {
    imgSrc:
      "https://images.pexels.com/photos/5209197/pexels-photo-5209197.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Weight lifting",
    description: "Strength",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/6455907/pexels-photo-6455907.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Weight Loss",
    description: "Cardio",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/10518845/pexels-photo-10518845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Strength Training",
    description: "Strength",
  },
];

const Packages = () => {
  return (
    <section className="py-md-5 py-4 ">
      <div className="container mt-0 mb-1">
        <div className="service-heading text-center text-uppercase">
          <h6>OUR Servies</h6>
          <h3 className="text-light">WHAT WE CAN OFFER</h3>
        </div>
        <div className="row mb-3">
          {cardData.map((card, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 mt-4 px-3">
              <div className="cards text-white bg-black">
                <div className="card-imgs-container">
                  <img
                    src={card.imgSrc}
                    className="card-imgs"
                    alt={card.title}
                  />
                </div>
                <div className="row px-3 pt-3">
                  <div className="col-8">
                    <div className="card-desc py-2">
                      <p>{card.description}</p>
                      <h4>{card.title}</h4>
                    </div>
                  </div>
                  <div className="col-4 ">
                    <div className="proceed px-2 py-2">
                      <lord-icon
                        src="https://cdn.lordicon.com/whtfgdfm.json"
                        trigger="hover"
                        state="hover-ternd-flat-5"
                        colors="primary:#f36d00"
                        style={{width:"30px",height:"30px"}}
                      ></lord-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
