import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const pricingPlans = [
  {
    type: "GOLD",
    description: "FITNESS DEAL",
    price: "RS 5,999",
    period: "/month",
    features: [
      "Custom workout plan",
      "Meal plan",
      "Progressive tracking",
      "Weekly check-ins",
      "24/7 Support",
    ],
  },
  {
    type: "PLATINUM",
    description: "FITNESS DEAL",
    price: "RS 8,999",
    period: "/month",
    features: [
      "Custom workout plan",
      "Meal plan",
      "Progressive tracking",
      "Weekly check-ins",
      "Online call consultation",
      "24/7 Support",
    ],
  },
];

const trainingPackages = ["Weight Lifting", "Weight Loss", "Strength Training"];

const PackageDetails = () => {
  const { type } = useParams();
  const selectedPackage = pricingPlans.find((plan) => plan.type === type);
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    height: "",
    weight: "",
    goalWeight: "", // Added Goal Weight
    age: "",
    trainingPackage: trainingPackages[0], // Default selection
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const templateParams = {
      ...formData, // This includes all form fields
      package_type: selectedPackage.type, // The selected pricing package
    };

    // Create the subject line
    const emailSubject = `${formData.trainingPackage} - ${formData.name}`;

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert(
            "Your message has been successfully submitted!\n\n" +
              "Thank you for reaching out. We will get back to you shortly via email or WhatsApp."
          );
        },
        (err) => {
          console.log("FAILED...", err);
          alert(
            "Oops! There was an issue with submitting your message.\n\n" +
              "Please check your details and try again. If the problem persists, feel free to contact us directly."
          );
        }
      );
  };

  return (
    <div className="container pt-2 px-md-5 mb-md-0 mb-3">
      <button
        onClick={() => navigate("/")}
        className="btn  position-fixed top-0 start-0 mt-3 ms-3 d-md-flex d-none"
        style={{ zIndex: 100, backgroundColor: "var(--primary-color)" }}
      >
        Back
      </button>
      <button
        onClick={() => navigate("/")}
        className="btn position-fixed top-0 start-0 ms-3 d-md-none"
        style={{
          zIndex: 1,
          backgroundColor: "var(--primary-color)",
          marginTop: "75px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          padding: "0",
        }}
      >
        <lord-icon
          src="https://cdn.lordicon.com/uvtlaqep.json"
          trigger="hover"
          colors="primary:#ffffff"
          style={{
            width: "20px",
            height: "20px",
            transform: "rotate(180deg)",
          }}
        ></lord-icon>
      </button>
      {selectedPackage ? (
        <>
          <h3 className="mt-4 d-md-none d-block text-center font-monospace para pt-5">
            {selectedPackage.type} PLAN
          </h3>
          <div className="row pt-md-5 pt-4">
            <div className="col-md-4 mt-4 d-md-block d-none ">
              <div className="borders pricing-cards">
                <div className="mt-3 para">
                  <h3 className="fw-bold">{selectedPackage.type}</h3>
                  <p className="text-white">{selectedPackage.description}</p>
                </div>
                <p
                  className="price fs-2"
                  style={{ color: "var(--primary-color)" }}
                >
                  {selectedPackage.price}
                  <sub className="fs-6">{selectedPackage.period}</sub>
                </p>
                <ul className="features ms-3 mt-3">
                  {selectedPackage.features.map((feature, i) => (
                    <li key={i} className="fs-6">
                      <i className="fa-solid fa-check"></i>
                      <strong>{feature.split(" ")[0]}</strong>{" "}
                      {feature.split(" ").slice(1).join(" ")}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-8 py-md-4 ">
              <div className="form-container borders p-4 rounded">
                <h4 className="text-light mb-3 mt-">Enter Your Details</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label text-light">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control text-light bg-transparent borders"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label text-light">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control text-light bg-transparent borders"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label text-light">
                          WhatsApp Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control text-light bg-transparent borders"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label text-light">
                          Height (ft)
                        </label>
                        <input
                          type="number"
                          name="height"
                          value={formData.height}
                          onChange={handleChange}
                          className="form-control text-light bg-transparent borders"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label text-light">
                          Weight (kg)
                        </label>
                        <input
                          type="number"
                          name="weight"
                          value={formData.weight}
                          onChange={handleChange}
                          className="form-control text-light bg-transparent borders"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label text-light">
                          Goal Weight (kg)
                        </label>
                        <input
                          type="number"
                          name="goalWeight"
                          value={formData.goalWeight}
                          onChange={handleChange}
                          className="form-control text-light bg-transparent borders"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row mb-1">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label text-light">Age</label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          className="form-control text-light bg-transparent borders"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label text-light">
                          Training Package
                        </label>
                        <select
                          name="trainingPackage"
                          value={formData.trainingPackage}
                          onChange={handleChange}
                          className="form-control text-light bg-transparent borders"
                          required
                        >
                          {trainingPackages.map((pkg, index) => (
                            <option key={index} value={pkg}>
                              {pkg}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button type="submit" className="butt w-50 mt-4">
                      Proceed
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="justify-content-center align-item-center">
          <p className="text-light text-center">No package selected.</p>
        </div>
      )}
    </div>
  );
};

export default PackageDetails;
