import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { motion } from "framer-motion";
import "@splidejs/splide/dist/css/splide.min.css";
import img1 from "../../Media/RA.jpg";
import img2 from "../../Media/RA2.jpg";
import img3 from "../../Media/RA3.jpg";
import img4 from "../../Media/RA4.jpg";
import img5 from "../../Media/newreview1.jpg";
import img6 from "../../Media/newreview2.jpg";
import img7 from "../../Media/newreview3.jpg";
import img8 from "../../Media/RA6.jpg";
import img9 from "../../Media/RA5.jpg";
import "./Gallary.css";

const Gallery = () => {
  const images = [img8, img9img5, img6, img7, img1, img2, img3, img4];
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const openImageDialog = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when dialog is open
  };

  const closeImageDialog = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
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
          perPage: 3,
          gap: "1rem",
          pagination: false,
          arrows: true,
          breakpoints: {
            1200: {
              perPage: 3,
            },
            900: {
              perPage: 2,
            },
            600: {
              perPage: 1,
            },
          },
        }}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <motion.img
              src={image}
              alt={`Slide ${index + 1}`}
              className="mx-2 gallery-image"
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                objectPosition: "bottom",
                border: "1px solid var(--primary-color)",
                borderRadius: "10px",
                cursor: "pointer", // Add pointer cursor to indicate clickability
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              onClick={() => openImageDialog(image)}
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* Image Dialog */}
      {isOpen && (
        <motion.div
          className="image-dialog-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeImageDialog}
        >
          <motion.div
            className="image-dialog-content"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <button className="close-button" onClick={closeImageDialog}>
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="full-size-image"
            />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Gallery;
