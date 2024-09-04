import React, { forwardRef, useState } from "react";
import img from "../../Media/profile4.jpg";
import emailjs from "emailjs-com";

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID, // Updated to use REACT_APP prefix
        process.env.REACT_APP_TEMPLATE_ID_CONTACT, // Updated to use REACT_APP prefix
        templateParams,
        process.env.REACT_APP_USER_ID // Updated to use REACT_APP prefix
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert(
            "Thank you for reaching out!\n\nYour message has been submitted successfully.\nWe will contact you soon via email or WhatsApp."
          );
        },
        (err) => {
          console.log("FAILED...", err);
          alert(
            "Oops! Something went wrong.\nPlease try submitting your message again."
          );
        }
      );
  };

  return (
    <section id="contact" ref={ref} className="contact-section ">
      <div className="service-heading text-center text-uppercase pt-5 pb-4">
        <h6>Contact Us</h6>
        <h3 className="text-light">Share Your Queries</h3>
      </div>
      <div className="container mt-2 mx-md-5 px-md-5 mb-4">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img
              src={img}
              alt="Profile"
              className="img-fluid d-md-block d-none w-100"
            />
          </div>
          <div className="col-md-8 ps-md-5 px-3 mt-md-2">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className="form-label text-light text-uppercase"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control bg-transparent borders text-light"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label text-light text-uppercase"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control bg-transparent borders text-light"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-md-4 mb-3">
                <label
                  htmlFor="message"
                  className="form-label text-light text-uppercase"
                >
                  Message
                </label>
                <textarea
                  className="form-control bg-transparent borders text-light"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-dark w-50 py-2 borders m-2 mb-5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
