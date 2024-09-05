import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ImageCarousel.css";

const ImageCarousel = ({ pricing2Ref }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  const images = [
    {
      src: "https://images.pexels.com/photos/4164510/pexels-photo-4164510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "PERSONAL TRAINING",
      subtext: "Online all around the globe",
      description: "Premoim weight loss and lifestyle transformations in just 8 weeks",
    },
    // Add more images if needed
  ];

  const handleScrollToContact = () => {
    pricing2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Start animation after 3.5 seconds
    const timeout = setTimeout(() => {
      setStartAnimation(true);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Cycle through images every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <AnimatePresence>
        {images.map(
          (image, index) =>
            currentIndex === index && (
              <motion.div
                key={index}
                className="image-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: startAnimation ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                <img src={image.src} alt={image.text} />
                <div className="image-overlay"></div>
              </motion.div>
            )
        )}
      </AnimatePresence>
      <div className="text-section">
        <motion.h1
          className="image-head display-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: startAnimation ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          {images[currentIndex].text}
        </motion.h1>
        <motion.h2
          className="image-head2 fw-semibold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: startAnimation ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 3.8 }}
        >
          {images[currentIndex].subtext}
        </motion.h2>
        <motion.p
          className="fs-5 my-md-4 my-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: startAnimation ? 1 : 0, y: 0 }}
          transition={{ duration: 1, delay: 4.1 }}
        >
          {images[currentIndex].description}
        </motion.p>
        <motion.div
          className="buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: startAnimation ? 1 : 0 }}
          transition={{ duration: 1, delay: 4.4 }}
        >
          <button
            className="btn btn-outline-light btn-contact fs-5"
            onClick={handleScrollToContact}
          >
            Start Now
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ImageCarousel;
