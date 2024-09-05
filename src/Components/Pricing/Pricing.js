import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Pricing.css";

const pricingPlans = [
  {
    type: "GOLD",
    description: "FITNESS DEAL",
    price: "RS 6,999",
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
    price: "RS 10,999",
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

const Pricing = forwardRef(({ pricingRef, pricing2Ref }, ref) => {
  return (
    <>
      <section className="bg-black" id="pricing" ref={pricingRef}>
        <div
          ref={pricing2Ref}
          className="service-heading text-center text-uppercase pt-md-5 pt-4"
        >
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
    </>
  );
});

export default Pricing;
