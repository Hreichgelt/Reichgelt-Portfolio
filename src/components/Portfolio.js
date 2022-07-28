import React from 'react';
import Projects from '../components/Projects';


import GitHubCards from "../components/GitHubCards";


function Portfolio() {
  return (
    <>
  <GitHubCards />
  {/* <Projects /> */}
  </ >
  )

}

export default Portfolio;




// var portfoArray = [
//   {
//     href: "https://intense-fjord-45584.herokuapp.com/",
//     src: "/assets/blazer.png",
//     alt: "Park Activity Finder",
//     title: "NPS Activity Finder",
//   },
//   {
//     href: "https://hreichgelt.github.io/Scheduling-Assistant/",
//     src: "/assets/schedule.png",
//     alt: "Work Day Scheduler",
//     title: "Work Day Scheduler",
//   },
//   {
//     href: "https://hreichgelt.github.io/Maps---The-Fingerprint-of-the-Past/",
//     src: "/components/assets/maps.png",
//     alt: "Map Search",
//     title: "Historic Maps Finder",
//   },
// ];

// const projects = portfoArray.map((project, i) => {
//   return (
//    <main>
//     <h2>Portfolio</h2>
//     <article key={i}>
//       <h2>Project</h2>
//       <a href={project.href}>
//         <img src={project.src} alt={project.alt} />
//       </a>
//       <h2>{project.title}</h2>
//     </article>
//     </main>
//   );
// });

// // import { Card, Row, Col, Container } from "react-bootstrap";

// // import schedule from "../components/assets/schedule.png";

// https://api.github.com/users/hreichgelt/repos