import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

const pricingPlans = [
  {
    type: "GOLD",
    description: "FITNESS DEAL",
    price: "RS 5,999",
    period: "/month",
    features: [
      "Custom Workout plan",
      "Meal plan",
      "Progressive Tracking",
      "Weekly Check-ins",
      "24/7 Support",
      "PDF file",
    ],
  },
  {
    type: "PLATINUM",
    description: "FITNESS DEAL",
    price: "RS 8,999",
    period: "/month",
    features: [
      "Custom Workout plan",
      "Meal plan",
      "Progressive Tracking",
      "Online Chat",
      "Video Fitness Consultancy",
      "Weekly Check-ins",
      "24/7 Support",
      "PDF file",
    ],
  },
];

const Pricing = forwardRef((props, ref) => {
  return (
    <section className="bg-black" id="pricing" ref={ref}>
      <div className="service-heading text-center text-uppercase pt-md-5 pt-4">
        <h6>Pricing</h6>
        <h3 className="text-light">What We Can Offer</h3>
      </div>
      <div className="pricing-plans d-md-flex d-block">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card mx-md-3 my-md-0 mt-4 ${plan.type.toLowerCase()}`}
          >
            <div className="heading">
              <h4>{plan.type}</h4>
              <p>{plan.description}</p>
            </div>
            <p className="price">
              {plan.price}
              <sub>{plan.period}</sub>
            </p>
            <ul className="features mt-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="fs-6">
                  <i className="fa-solid fa-check"></i>
                  <strong>{feature.split(" ")[0]}</strong>{" "}
                  {feature.split(" ").slice(1).join(" ")}
                </li>
              ))}
            </ul>
            <Link
              to={`/package-details/${plan.type}`}
              className="cta-btn text-decoration-none"
            >
              SELECT
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Pricing;
