import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      <motion.div
        className="text-center container pt-md-5 px-md-5 fs-5 d-none d-md-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h1 className="abouts py-md-2" variants={textVariants}>
          OUR APPROACH
        </motion.h1>
        <motion.p className="second-text text-white px-md-5" variants={textVariants}>
          1-to-1 online personal training is the ultimate investment in your
          health. You'll be working directly with your coach, Omar Khalid,
          following a bespoke plan to ensure you hit your goals in record time.
          Whether you want to slim down, add muscle or anything in between, our
          personal training packages will get you there in a fun and sustainable
          way. We'll teach you how to take control of your health and weight,
          without relying on any specific diet or products, with our 1-to-1
          nutrition coaching.
        </motion.p>
      </motion.div>

      <motion.div
        className="text-md-center container pt-md-5 ps-md-0 px-4 fs-6 d-md-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h1 className="abouts ps-md-0 ps-2 py-md-4" variants={textVariants}>
          OUR APPROACH
        </motion.h1>
        <motion.p className="second-text text-white fs-5 px-md-5 px-2" variants={textVariants}>
          1-to-1 online personal training is the ultimate investment in your
          health. You'll be working directly with your coach, Omar Khalid,
          following a bespoke plan to ensure you hit your goals in record time.
          Whether you want to slim down, add muscle or anything in between, our
          personal training packages will get you there in a fun and sustainable
          way. We'll teach you how to take control of your health and weight,
          without relying on any specific diet or products, with our 1-to-1
          nutrition coaching.
        </motion.p>
      </motion.div>
    </>
  );
};

export default About;
