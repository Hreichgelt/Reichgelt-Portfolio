import React from "react";
import { Link } from "react-router-dom";
// import ranier from "./assets/ranier.jpg";
import "./styles/about.css";

const AboutInfo = () => {
  return (
    <div className="about-info">
      <div className="right">
        <h1>Brand</h1>
        <p>
          As a Fullstack Engineer, I merge my background in recreation and land
          management with my passion for web development to create immersive
          experiences for recreation enthusiasts and tourists alike.
          Proficient in HTML, CSS, JavaScript, APIs, JSON, jQuery, GIT, Node.js,
          Express, Testing, NoSQL, MySQL, MongoDB, IndexedDB, and more, I bring
          a versatile skill set to every project.{" "}
          Throughout my career, I've earned a reputation for visionary thinking
          and the ability to craft diverse programs. Recently adding Adobe Suite
          to my toolkit, I'm enthusiastic about exploring creative endeavors.
          Whether working independently or collaboratively, I've contributed to
          various projects, from mapping initiatives to password generators.
        </p>

        <h2>About Me</h2>
        <p>
          My name is Hans Reichgelt, and I'm driven by a relentless pursuit of
          growth and learning. Transitioning from a rich background in outdoor
          education, recreation, and land management, I found myself drawn to
          the vast potential for learning and innovation in the tech industry,
          particularly in web development.
        </p>
        <p>
          Drawing parallels between project management in outdoor endeavors and
          the tech world, I've honed my problem-solving skills and collaborative
          approach. Coordinating teams, volunteers, and contractors to enhance
          landscapes and build trails has instilled in me a keen ability to
          navigate complex challenges and delegate tasks effectively.
          Infusing my work with a passion for adventure and cultural immersion,
          I approach every project as an opportunity for exploration. My diverse
          experiences and travels enable me to think outside the box and offer
          creative solutions to unique problems.
          Demonstrating a strong willingness to learn and adapt, I embarked on
          acquiring videography skills through Adobe Premiere Pro to reduce
          costs for my previous employer. Despite the turbulence of
          transitioning into the IT field amidst layoffs and logistical
          challenges, I embraced a helpdesk role to grasp the intricacies of
          tech systems, ultimately earning a promotion to a level 2 analyst
          within a year.
        </p>
        <p>
          My previous roles have equipped me with invaluable skills in coaching,
          leadership, and mentorship, which I am eager to leverage in the tech
          industry. I envision myself as a collaborative team member, offering
          fresh perspectives and unconventional solutions to drive innovation
          forward.
          Staying abreast of technological advancements and industry trends, I
          immerse myself in email list serves, group discussions, and personal
          projects. I particularly appreciate leveraging AI to simplify complex
          concepts for beginners, reflecting my commitment to accessible
          learning.
          My approach to teamwork emphasizes open communication and a flexible
          leadership style tailored to the needs of each project. Whether
          leading a team or contributing expertise, I prioritize collaboration
          and collective success.
          Looking ahead, my long-term aspiration is to evolve into a senior
          engineer and continue my journey of growth within the tech industry.
          While the path to achieving this goal may evolve, my determination
          remains steadfast, fueled by a passion for learning and a commitment
          to excellence.
        </p>
        <Link to="/contact">
          <button className="btn" id="contactBtn">
            Contact
          </button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <p className="featured">
        Featured below are glimpses of my past endeavors, encapsulating both professional achievements and a current passion project aimed at revitalizing natural landscapes for enhanced recreational experiences. Embarking on a journey to cultivate an idyllic hunting environment, I envision sustaining lush food plots adorned with apple and oak trees, alongside nurturing watering holes. This ongoing project reflects my commitment to environmental stewardship and the pursuit of holistic outdoor experiences. 
        </p>
      </div>

      {/* <div className="left"> */}
      {/* <div className="image-container">
          <div className="ranier">
            <img src={ranier} className="imgFish" alt="Mount Ranier"></img>
          </div>
        </div> */}
      {/* </div> */}
      <div className="video-wrapper">
        <div className="plot">
          <div className="video-container">
            <div className="timelapse">
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/j134HMwNpXA?si=11DFdiqLsyXcafCN"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="OTC">
          <div className="video-container">
            <div className="timelapse">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/MY6SmIv9vwc?si=8pbbD76h_BYZiop4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mural">
          <div className="video-container">
            <div className="timelapse">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/W42r_CvWen4?si=Y8j9GomBXq-eWZ3W"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mural2">
          <div className="video-container">
            <div className="timelapse">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/CLdR3qMemM8?si=aSD9VbhRMdICEh43"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
