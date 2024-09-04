import React, { useState } from "react";
import img from "../../Media/profile2.jpg"

const Contact = () => {
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
    console.log("Form submitted:", formData);
    // Handle form submission logic here, such as sending data to a server
  };

  return (
    <>
      <div className="service-heading text-center text-uppercase pt-5 pb-4" id="contact">
        <h6>Contact us </h6>
        <h3 className="text-light">Share your queries</h3>
      </div>
      <div className="container mt-2 mx-md-5 px-md-5 mb-4" >
        <div className="row justify-content-center">
          <div className="col-md-4">
            {" "}
            <img
            src={img}
              alt="Profile"
              className="img-fluid d-md-block d-none w-100"
            />
          </div>
          <div className="col-md-8 ps-md-5 px-3 mt-md-2">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">

                <label htmlFor="name" className="form-label text-light text-uppercase">
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

                <label htmlFor="email" className="form-label text-light text-uppercase">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control  bg-transparent borders text-light"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-md-4    mb-3">

                <label htmlFor="message" className="form-label text-light text-uppercase">
                  Message
                </label>
                <textarea
                  className="form-control  bg-transparent borders text-light"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-50 py-2 borders mt-2 " >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
