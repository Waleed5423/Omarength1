import React, { useEffect, useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { motion, AnimatePresence } from "framer-motion";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const splideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.splide.on("moved", (newIndex) => {
        setCurrentIndex(newIndex);
      });
    }
  }, []);

  const images = [
    {
      src: "https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Explore Nature",
    },
    {
      src: "https://images.pexels.com/photos/685531/pexels-photo-685531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Urban Adventures",
    },
    {
      src: "https://images.pexels.com/photos/4164510/pexels-photo-4164510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Culinary Delights",
    },
    {
      src: "https://images.pexels.com/photos/1092874/pexels-photo-1092874.jpeg?auto=compress&cs=tinysrgb&w=600",
      text: "Cultural Wonders",
    },
  ];

  return (
    <div className="carousel-container">
      <Splide
        ref={splideRef}
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 5000,
          pagination: false,
          pauseOnHover: true,
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <div className="slide-content">
              <img src={image.src} alt={image.text} />
              <div className="overlay"></div>
              <AnimatePresence>
                {currentIndex === index && (
                  <motion.div
                    className="slide-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }} // Adjust duration as needed
                  >
                    {image.text}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ImageCarousel;
