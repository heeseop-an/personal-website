import React from "react";
import Project from "./Project";
import INFO from "../../data/user";
import "./styles/Projects.css";

const Projects = () => {
    return (
        <React.Fragment>
            <div className="all-projects-container">
                <div className="title about-title">
                    {INFO.project.title}
                </div>
                {INFO.project.projects.map((project, index) => (
                    <div className="all-projects-project" key={index}>
                        <Project
                            title={project.title}
                            body={project.body}
                            description={project.description}
                            image={process.env.PUBLIC_URL + '/' + project.img}
                            stack={project.stack}
                            linkText={project.linkText}
                            link={project.link}
                        />
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Projects;

