import React from "react";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import HeaderImg from '../components/HeaderImg'
import AboutInfo from '../components/AboutInfo'
// import me from "../components/assets/profilepic.png"



const About = () => {
  return (
    <div>
      <Nav />
      <HeaderImg heading='About Me' />
      <AboutInfo />
      <Footer />
    </div>
  );
}

export default About;


