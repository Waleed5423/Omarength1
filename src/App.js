import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import PackageDetails from './Components/PacakageDetail/PackageDetails';
import 'lenis/dist/lenis.css';
import { ReactLenis } from '@studio-freight/react-lenis';
import Loader from './Components/Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <ReactLenis root options={{ lerp: 0.03, duration: 1.5, smoothTouch: true }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/package-details/:type" element={<PackageDetails />} />
          </Routes>
        </Router>
      </ReactLenis>
    </>
  );
};

export default App;
