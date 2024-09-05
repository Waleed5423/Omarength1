import React from "react";
import { motion } from "framer-motion";
import img from "../../Media/profile3.jpg";

const Profile = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <motion.div
        className="service-heading text-center text-uppercase pt-4 pb-4"
        id="aboutus"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h6 variants={textVariants}>About me</motion.h6>
        <motion.h3 className="text-light" variants={textVariants}>
          Know me more
        </motion.h3>
      </motion.div>
      <motion.div
        className="container mt-md-3 mb-1 text-light"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="row mx-md-5 px-md-5 px-2">
          <motion.div
            className="col-md-4 text-center"
            variants={imgVariants}
          >
            <img src={img} alt="Profile" className="img-fluid" />
          </motion.div>
          <motion.div
            className="col-md-8 px-md-4 ps-4 mt-md-3 mt-4"
            variants={textVariants}
          >
            <h2 className="about fs-1">OMAR KHALID</h2>
            <p className="fs-5">
              With my experience of 3+ years and training 50+ clients, as a
              professional fitness trainer, my aim is to help you achieve your
              dream physique through a personalized fitness plan designed just
              for you. From the basics to advanced techniques, I’ll guide you
              every step of the way, ensuring you have all the knowledge and
              support you need to transform your body and reach
              your fitness goals.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Profile;
