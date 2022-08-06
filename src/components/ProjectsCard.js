import React from "react";
// import './ProjectStyle.css'


const ProjectsCard = (props) => {
    return (
        <div className="experience-container">
            <div className="project-container">
                <div className="project-card">
                    <img src={props.image} alt='project' />
                    <h2 className="project-title">{props.title}</h2>
                    <div className="projet-deets">
                        <p style={{color: 'blue'}}>{props.text}</p>
                        <div className="project-btns">
                            <a href={props.website} className='btn'>Live Site</a>
                            <a href={props.repository} className='btn'>Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
  export default ProjectsCard