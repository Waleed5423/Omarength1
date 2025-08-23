import React, { forwardRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Pricing.css";

const pricingPlans = [
  {
    type: "🥇 GOLD",
    rawType: "GOLD",
    description: "",
    price: "€50",
    period: "",
    features: [
      "Custom workout plan",
      "Basic nutrition advice",
      "24/7 text support",
    ],
  },
  {
    type: "💎 PLATINUM",
    rawType: "PLATINUM",
    description: "⭐ Most Popular",
    price: "€58",
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

const Pricing = forwardRef(({ pricingRef, pricing2Ref }, ref) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 2500); // Delay for 3.5 seconds

    return () => clearTimeout(timer); // Cleanup
  }, []);

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
    <section className="bg-black" id="pricing" ref={pricingRef}>
      <motion.div
        ref={pricing2Ref}
        className="service-heading text-center text-uppercase"
        style={{ paddingTop: "1.5rem" }}
        initial="hidden"
        animate={showAnimation ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h6 variants={cardVariants}>Pricing</motion.h6>
        <motion.h3 className="text-light" variants={cardVariants}>
          What I Can Offer
        </motion.h3>
      </motion.div>
      <motion.div
        className="pricing-plans d-md-flex d-block"
        initial="hidden"
        animate={showAnimation ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            className={`pricing-card mx-md-3 my-md-2 mt-4 ${plan.rawType.toLowerCase()}`}
            variants={cardVariants}
          >
            <div className="heading pt-2">
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
              to={`/package-details/${plan.rawType}`}
              className="cta-btn text-decoration-none"
            >
              SELECT
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
});

export default Pricing;
