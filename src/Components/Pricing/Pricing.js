import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <section className="bg-black" id="pricing" ref={pricingRef}>
        <motion.div
          ref={pricing2Ref}
          className="service-heading text-center text-uppercase pt-md-5 pt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h6 variants={cardVariants}>Pricing</motion.h6>
          <motion.h3 className="text-light" variants={cardVariants}>
            What We Can Offer
          </motion.h3>
        </motion.div>
        <motion.div
          className="pricing-plans d-md-flex d-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card mx-md-3 my-md-0 mt-4 ${plan.type.toLowerCase()}`}
              variants={cardVariants}
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
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
});

export default Pricing;
