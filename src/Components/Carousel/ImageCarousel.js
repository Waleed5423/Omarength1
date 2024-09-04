import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ImageCarousel.css";

const ImageCarousel = ({ pricing2Ref }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "https://images.pexels.com/photos/4164510/pexels-photo-4164510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "PERSONAL TRAINING",
      subtext: "Online all around the globe",
      description: "Premium weight loss and lifestyle transformations.",
    },
    // Add more images if needed
  ];

  const handleScrollToContact = () => {
    pricing2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
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
                animate={{ opacity: 1 }}
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
        <h1 className="image-head display-3">{images[currentIndex].text}</h1>
        <h2 className="image-head2 fw-semibold">
          {images[currentIndex].subtext}
        </h2>
        <p className="fs-5 my-md-4 my-2">{images[currentIndex].description}</p>
        <div className="buttons">
          <button
            className="btn btn-outline-light btn-contact fs-5"
            onClick={handleScrollToContact}
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
