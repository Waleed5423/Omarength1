import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Detailed Customised Plans",
      description:
        "Experience tailored fitness with our detailed customised plans, crafted to meet your unique goals and to achieve your dream physique.",
      iconSrc: "https://cdn.lordicon.com/gzwfqafg.json",
    },
    {
      title: "Expert Guidance",
      description:
        "Benefit from professional expert Omar Khalid, in ensuring effective workouts, proper form, and optimal results for your goals.",
      iconSrc: "https://cdn.lordicon.com/mflfflrz.json",
    },
    {
      title: "Recovery Routine",
      description:
        "Enhance your progress with my recovery routine, designed to optimize rest, reduce injury risk, and accelerate muscle recovery.",
      iconSrc: "https://cdn.lordicon.com/tkcktgcx.json",
    },
    {
      title: "Motivation Support",
      description:
        "Stay committed with our motivation & support, providing weekly check-ins, and guidance to keep you on track towards success.",
      iconSrc: "https://cdn.lordicon.com/aqrzgjfy.json",
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="container my-md-5 my-4" id="choose">
      <motion.div
        className="service-heading text-center my-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={animationVariants}
      >
        <h6>WHY CHOOSE OMARENGTH?</h6>
        <h3 className="text-light">PUSH YOUR LIMITS FORWARD</h3>
      </motion.div>
      <div className="row">
        {services.map((service, index) => (
          <motion.div
            className="col-md-3 col-6 text-center mb-2 mb-md-0"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={animationVariants}
            transition={{ delay: 0.2 * index }} // Stagger the animation
          >
            <div className="icon-circle">
              <div className="icon">
                <lord-icon
                  src={service.iconSrc}
                  trigger="loop-on-hover"
                  colors="primary:#f36d00,secondary:#f36d00,tertiary:#f36d00"
                  style={{ width: "70px", height: "70px" }}
                  stroke="bold"
                ></lord-icon>
              </div>
            </div>
            <div className="service-desc">
              <h5 className="text-light pt-3">{service.title}</h5>
              <p className="px-1">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
