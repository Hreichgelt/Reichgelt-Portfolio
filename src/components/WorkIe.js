import React from "react"
// import './styles/projectCard.css'
import ProjectsCard from './ProjectsCard'
import { Projects } from './ProjectData'

const Project = () => {
    return (
        <div className="workie-container">
            <div className="'project-container">
                {Projects.map((project, index) => {
                    return (
                        <ProjectsCard 
                        key={index}
                        image={project.image}
                        title={project.title}
                        text={project.text}
                        website={project.website}
                        repository={project.repository}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Project