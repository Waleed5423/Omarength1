import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import "@splidejs/splide/dist/css/splide.min.css";
import img1 from "../../Media/RA.jpg";
import img2 from "../../Media/RA2.jpg";
import img3 from "../../Media/RA3.jpg";
import img4 from "../../Media/RA4.jpg";
import "./Gallary.css";

const Gallery = () => {
  // Sample images
  const images = [img1, img2, img3, img4];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="m-2"
      id="reviews"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="service-heading text-center text-uppercase pt-5 mb-5"
        variants={containerVariants}
      >
        <h6>REVIEWS</h6>
        <h3 className="text-light">Our satisfied customers</h3>
      </motion.div>
      <Splide
        options={{
          perPage: 3, // Display 3 images at a time
          gap: "1rem", // Space between slides
          pagination: false, // Disable pagination
          arrows: true, // Enable navigation arrows
          breakpoints: {
            1200: {
              perPage: 3, // Show 3 images on screens larger than 1200px
            },
            900: {
              perPage: 2, // Show 2 images on screens larger than 900px
            },
            600: {
              perPage: 1, // Show 1 image on screens larger than 600px
            },
          },
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <motion.img
              src={image}
              alt={`Slide ${index + 1}`}
              className="mx-2"
              style={{
                width: "100%",
                height: "auto",
                border: "1px solid var(--primary-color)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </motion.div>
  );
};

export default Gallery;
