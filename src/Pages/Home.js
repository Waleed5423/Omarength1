import React, { useRef } from "react";
import ImageCarousel from "../Components/Carousel/ImageCarousel";
import Services from "../Components/Services/Services";
import Packages from "../Components/Packages/Packages";
import Banner from "../Components/Banner/Banner";
import Pricing from "../Components/Pricing/Pricing";
import Gallary from "../Components/Gallary/Gallary";
import Profile from "../Components/Profile/Profile";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import About from "../Components/About/About";
import Marquee from "../Components/Marquee/Marquee";

const Home = () => {
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  const pricing2Ref = useRef(null);

  return (
    <>
      <ImageCarousel pricing2Ref={pricing2Ref} />
      <Services />
      <Packages pricingRef={pricingRef} />
      <Marquee />
      <Banner contactRef={contactRef} />
      <Pricing pricingRef={pricingRef} pricing2Ref={pricing2Ref} />
      <Gallary />
      <Profile />
      <About />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
};

export default Home;
