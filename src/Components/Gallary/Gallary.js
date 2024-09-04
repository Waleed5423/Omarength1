import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import img1 from "../../Media/RA.jpg";
import img2 from "../../Media/RA2.jpg";
import img3 from "../../Media/RA3.jpg";
import img4 from "../../Media/RA4.jpg";
import "./Gallary.css";

const Gallery = () => {
  // Sample images
  const images = [img1, img2, img3, img4];

  return (
    <div className="m-2" id="reviews">
      <div className="service-heading text-center text-uppercase pt-5 mb-5">
        <h6>Gallary</h6>
        <h3 className="text-light">Our satisfied customers</h3>
      </div>
      <Splide
        options={{
          perPage: 3, // Display 2 images at a time
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
            <img
              src={image}
              className="mx-2"
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "auto",
                border: "1px solid var(--primary-color)",
              }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Gallery;
