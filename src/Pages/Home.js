import React from "react";
import ImageCarousel from "../Components/Carousel/ImageCarousel";
import Services from "../Components/Services/Services";
import Packages from "../Components/Packages/Packages";
import Banner from "../Components/Banner/Banner";
import Pricing from "../Components/Pricing/Pricing";
import Gallary from "../Components/Gallary/Gallary";
import a from "../Media/a.jpg";
import Profile from "../Components/Profile/Profile";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Marquee from "../Components/Marquee/Marquee";

const Home = () => {
  return (
    <>
      <ImageCarousel />
      <Services />
      <Packages />
      <Marquee />
      <Banner />
      <Pricing />
      <Gallary />
      <Profile />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
