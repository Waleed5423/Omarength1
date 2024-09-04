import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PackageDetails from "./Components/PacakageDetail/PackageDetails";

const App = () => {
  useEffect(() => {
    const handleAnchorClicks = (event) => {
      if (event.target.tagName === "A" && event.target.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    
    document.addEventListener("click", handleAnchorClicks);
    return () => {
      document.removeEventListener("click", handleAnchorClicks);
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/package-details/:type" element={<PackageDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
