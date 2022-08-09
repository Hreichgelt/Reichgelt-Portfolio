import React from "react";
import { Link } from "react-router-dom";
import ranier from "./assets/ranier.jpg";
import './styles/about.css'

const AboutInfo = () => {
  return (
    <div className="about-info">
      <div className="right">
        <h1>Brand</h1>
        <p>
          Fullstack Engineer leveraging recreation and land-management
          background to build a more inclusive experience for recreation seekers
          and tourists. Current skills include; HTML CSS, JavaScript, APIs,
          JSON, Jquery, APIs, GIT, Node, Express, Testing, and MySQL. Throughout
          career, have developed the reputation as a visionary with the ability
          to develop a wide range of programs. Recently learned the Adobe Suite
          and am passionate about creative projects. A team-player with the
          capacity to quickly learn and become a crucial member of any team.
          During development journey have worked independently and in groups to
          create mapping projects, password generators and more. Resilient
          individual with a growth mindset, able to adapt leadership style to
          achieve quality results. Excited to leverage new skills in the tech
          field as a part of a creative team.
        </p>
        <h2>About Me</h2>
        <p>
          Small town midwesterner trying to see as many places, meet as many people, try as many foods and learn as much
          as he possibly can. Spent the last decade in Colorado but have started
          moving around a bit more. Love all things adventure and nature. Always
          up for learning something new.
        </p>
        <Link to="/contact">
          <button className="btn">Contact Me</button>
        </Link>
      </div>

      <div className="left">
        <div className="image-container">
          <div className="ranier">
            <img src={ranier} className="imgFish" alt="Fish and Diver"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
