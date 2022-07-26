import React from "react";

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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

function Resume() {
  return (
    <div className="resume">
      <h2>
        <a
          href="https://drive.google.com/file/d/1MkYfOJHLUAp845RWQLypPnLJvGqxEgYZ/view?usp=sharing"
          target="_blank">Resume</a>
       </h2>
    



         <main>
           <div style={styles.card}>
             <div style={styles.heading}>Skills</div>
             <div style={styles.content}>
             HTML | CSS | JavaScript | Jquery | SEO | Bootstrap | APIs | JSON | AJAX
             | Git | Node | Testing | OOP | Express.js | MySQL | ORM and MVC | NoSQL
             |MongoDB | Progressive Web Apps | React
             </div>
           </div>
         </main>
    </div>

  );
}

export default Resume;
