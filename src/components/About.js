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

function About() {
  return (
    
    <main>
      <img className="profile" src={me} alt="Hans"></img>
      <div style={styles.card}>
        <div style={styles.heading}>About Me</div>
        <div style={styles.content}>
        Fullstack Engineer leveraging recreation and land-management background to build a more inclusive experience for
recreation seekers and tourists. Current skills include; HTML CSS, JavaScript, APIs, JSON, Jquery, APIs, GIT, Node,
Express, Testing, and MySQL. Throughout career, have developed the reputation as a visionary with the ability to develop
a wide range of programs. Recently learned the Adobe Suite and am passionate about creative projects. A team-player
with the capacity to quickly learn and become a crucial member of any team. During development journey have worked
independently and in groups to create mapping projects, password generators and more. Resilient individual with a
growth mindset, able to adapt leadership style to achieve quality results. Excited to leverage new skills in the tech field as
a part of a creative team.
        </div>
      </div>
    </main>
  );
}

export default About;
