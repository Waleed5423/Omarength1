import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import img from "../../Media/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="body">
      <div className="header">
        {/* Logo on the left */}
        <div className="logo">
          <img src={img} className="logo-img" alt="logo" />
        </div>

        {/* Social icons on the right */}
        <div className="social-icons">
          <a
            href="https://www.tiktok.com/@omarength"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/omarength/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaInstagram, FaTiktok } from "react-icons/fa";
// import img from "../../Media/logo.png";
// import "./Navbar.css";

// const Navbar = () => {
//   // State for controlling navbar activation (commented out as per request)
//   // const [navActive, setNavActive] = useState(false);
//   // const [initialLoad, setInitialLoad] = useState(true);

//   // Function to toggle navbar (commented out as per request)
//   // const toggleNav = () => {
//   //   setNavActive(!navActive);
//   // };

//   // Function to close nav and scroll (commented out as per request)
//   // const closeNavAndScroll = (event) => {
//   //   event.preventDefault();
//   //   const targetId = event.currentTarget.getAttribute("href").slice(1);
//   //   const targetElement = document.getElementById(targetId);

//   //   setNavActive(false);

//   //   setTimeout(() => {
//   //     if (targetElement) {
//   //       targetElement.scrollIntoView({ behavior: "smooth" });
//   //     }
//   //   }, 800);
//   // };

//   // Effect for initial load (commented out as per request)
//   // useEffect(() => {
//   //   setInitialLoad(false);
//   // }, []);

//   return (
//     // Removed nav-active class logic as per request
//     <div className="body">
//       <div className="header">
//         {/* Hamburger toggler (commented out as per request) */}
//         {/* <div className="toggler">
//           <div className="menu-icon mx-3" onClick={toggleNav}>
//             <span className="menu-icon__line menu-icon__line-left"></span>
//             <span className="menu-icon__line"></span>
//             <span className="menu-icon__line menu-icon__line-right"></span>
//           </div>
//         </div> */}

//         {/* Logo section */}
//         <div className="logo">
//           <img src={img} className="logo-img" alt="logo" />
//         </div>

//         {/* Social icons - visible on both desktop and mobile */}
//         <div className="social-icons me-3">
//           <a
//             href="https://www.tiktok.com/@omarength"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaTiktok />
//           </a>
//           <a
//             href="https://www.instagram.com/omarength/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FaInstagram />
//           </a>
//         </div>
//       </div>

//       {/* Navigation menu (commented out as per request) */}
//       {/* <motion.div
//         className="nav"
//         initial={{ opacity: 0, x: "-100%" }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="nav__content">
//           <ul className="nav__list">
//             <a
//               style={{ textDecoration: "none" }}
//               href="#home"
//               onClick={closeNavAndScroll}
//             >
//               <li className="nav__list-item">Home</li>
//             </a>
//             <a
//               style={{ textDecoration: "none" }}
//               href="#services"
//               onClick={closeNavAndScroll}
//             >
//               <li className="nav__list-item">Services</li>
//             </a>
//             <a
//               style={{ textDecoration: "none" }}
//               href="#pricing"
//               onClick={closeNavAndScroll}
//             >
//               <li className="nav__list-item">Pricing</li>
//             </a>
//             <a
//               style={{ textDecoration: "none" }}
//               href="#reviews"
//               onClick={closeNavAndScroll}
//             >
//               <li className="nav__list-item">Reviews</li>
//             </a>
//             <a
//               style={{ textDecoration: "none" }}
//               href="#contact"
//               onClick={closeNavAndScroll}
//             >
//               <li className="nav__list-item">Contact</li>
//             </a>
//           </ul>
//         </div>
//       </motion.div> */}
//     </div>
//   );
// };

// export default Navbar;
