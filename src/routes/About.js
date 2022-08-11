import React from "react";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import AboutInfo from '../components/AboutInfo'
import HeroWrapper from "../components/HeroWrapper";


const About = () => {
  return (
    <div>
      <Nav />
      <HeroWrapper>
      <AboutInfo />
      </HeroWrapper>
      <Footer />
    </div>
  );
}

export default About;