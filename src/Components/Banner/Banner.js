import React from "react";
import { motion } from "framer-motion";
import "./Banner.css";

const Banner = ({ contactRef }) => {
  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const bannerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="overlay"></div>
      <motion.div
        className="content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={bannerVariants}
      >
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={bannerVariants}
          transition={{ delay: 0.1 }}
        >
          REGISTER NOW TO EMBARK ON YOUR FITNESS JOURNEY
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={bannerVariants}
          transition={{ delay: 0.2 }}
        >
          WHERE HEALTH, BEAUTY AND FITNESS MEET.
        </motion.p>
        <motion.button
          onClick={handleScrollToContact}
          className="btn btn-outline-light"
          initial="hidden"
          whileInView="visible"
          variants={bannerVariants}
          transition={{ delay: 0.3 }}
        >
          Contact
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Banner;
