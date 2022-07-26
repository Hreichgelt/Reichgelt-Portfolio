import React from "react";
import blazer from "../components/assets/blazer.png";
import maps from "../components/assets/maps.png";
import schedule from "../components/assets/schedule.png";

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


function Portfolio() {
  return (
    <main>
      <h2>Portfolio</h2>
    <div style={styles.card}>
      <div style={styles.heading}>Trail Blazers</div>
      <div style={styles.content}>
        <p><a href="https://intense-fjord-45584.herokuapp.com/">Live Site</a></p>
        <p><a href="https://github.com/mycancel/trailblazers">Repository</a></p>
        <img className="project" style={styles.card} src={blazer} alt="Trail Blazers"></img>
      </div>
    </div>
    <div style={styles.card}>
        <div style={styles.heading}>Maps</div>
        <div style={styles.content}>
          <p><a href="https://hreichgelt.github.io/Maps---The-Fingerprint-of-the-Past/">Live Site</a></p>
          <p><a href="https://github.com/Hreichgelt/Maps---The-Fingerprint-of-the-Past">Repository</a></p>
          <img className="project" style={styles.card} src={maps} alt="Trail Blazers"></img>
        </div>
      </div>
  </main>


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