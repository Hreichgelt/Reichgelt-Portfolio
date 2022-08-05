import React from "react";

import me from "../components/assets/profilepic.png"

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "cadetblue",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 20,
  },
};

const About = () => {
  return (
    <div>
      <Nav />
      {/* <Hero Image heading='About Me' /> */}
      <AboutInfo />
      <Footer />
    </div>
  );
}

export default About;


