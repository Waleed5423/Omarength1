import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const pricingPlans = [
  {
    type: "GOLD",
    description: "FITNESS DEAL",
    price: "RS 9,999",
    period: "",
    features: [
      "Custom workout plan",
      "Basic nutrition advice",
      "24/7 text support",
    ],
  },
  {
    type: "PLATINUM",
    description: "PREMIUM FITNESS",
    price: "RS 13,999",
    period: "",
    features: [
      "Custom workout plan",
      "Custom meal plan",
      "Progressive tracking",
      "Monthly check-ins",
      "24/7 text support",
      "Habit & lifestyle coaching",
    ],
  },
];

const trainingPackages = ["Weight Lifting", "Weight Loss", "Strength Training"];

const countryCodes = [
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+1", country: "USA/Canada", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
];

const PackageDetails = () => {
  const { type } = useParams();
  const selectedPackage = pricingPlans.find((plan) => plan.type === type);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+92",
    phone: "",
    height: "",
    weight: "",
    goalWeight: "",
    age: "",
    trainingPackage: trainingPackages[0],
  });

  const [errors, setErrors] = useState({
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Only allow numbers
      if (value === "" || /^\d*$/.test(value)) {
        setFormData({ ...formData, [name]: value });

        // Validate for exactly 10 digits (consistent validation)
        if (value.length > 0 && value.length !== 10) {
          setErrors({
            ...errors,
            phone: "Phone number must be exactly 10 digits",
          });
        } else {
          setErrors({ ...errors, phone: "" });
        }
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Phone number validation - changed to 10 digits
    if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      valid = false;
    } else {
      newErrors.phone = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const templateParams = {
      ...formData,
      package_type: selectedPackage.type,
      fullPhone: `${formData.countryCode}${formData.phone}`,
    };

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
    <div className="container py-4 px-md-5 position-relative">
      <button
        onClick={() => navigate("/")}
        className="btn btn-outline-light position-absolute top-0 start-0 mt-3 ms-3 d-flex align-items-center gap-2"
        style={{ zIndex: 100 }}
      >
        <span className="d-md-inline">Back</span>
      </button>

      {selectedPackage ? (
        <>
          <h3 className="mt-4 d-md-none d-block text-center font-monospace para pt-5">
            {selectedPackage.type} PLAN
          </h3>
          <div className="row pt-md-5 pt-4">
            <div className="col-md-4 d-md-block d-none">
              <div className="borders pricing-cards h-100">
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
                <ul className="features ms-3 mt-3 mb-4">
                  {selectedPackage.features.map((feature, i) => (
                    <li key={i} className="fs-6 mb-2">
                      <i className="fa-solid fa-check"></i>
                      <strong>{feature.split(" ")[0]}</strong>{" "}
                      {feature.split(" ").slice(1).join(" ")}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="form-container borders p-4 rounded h-100">
                <h4 className="text-light mb-3">Enter Your Details</h4>
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
                      <div className="mb-2">
                        <label className="form-label text-light">
                          WhatsApp Number
                        </label>
                        <div className="input-group">
                          <select
                            name="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="form-control text-light bg-transparent borders"
                            style={{ maxWidth: "80px", borderRight: "none" }}
                            required
                          >
                            {countryCodes.map((country, index) => (
                              <option
                                key={index}
                                value={country.code}
                                style={{
                                  backgroundColor: "#333",
                                  color: "white",
                                }}
                              >
                                {country.flag} {country.code}
                              </option>
                            ))}
                          </select>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control text-light bg-transparent borders"
                            placeholder="Enter 10-digit number"
                            style={{ borderLeft: "none" }}
                            required
                            maxLength="10"
                          />
                        </div>
                        <small className="text-muted">
                          Full number: {formData.countryCode}
                          {formData.phone}
                          {errors.phone && (
                            <span className="text-danger d-block mt-1">
                              {errors.phone}
                            </span>
                          )}
                        </small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-2">
                        <label className="form-label text-light">Height</label>
                        <select
                          name="height"
                          value={formData.height}
                          onChange={handleChange}
                          className="form-control text-light bg-transparent borders"
                          required
                        >
                          <option value="">Select Height</option>
                          {Array.from({ length: 8 }, (_, i) => {
                            const feet = i + 4;
                            return Array.from({ length: 12 }, (_, j) => {
                              const inches = j;
                              const height = `${feet}'${inches}"`;
                              return (
                                <option key={height} value={height}>
                                  {height}
                                </option>
                              );
                            });
                          })}
                        </select>
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
                  <div className="d-flex justify-content-center mt-3">
                    <button type="submit" className="butt w-50">
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
