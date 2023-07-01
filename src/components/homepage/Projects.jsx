import React from "react";

import Project from "./Project";

import INFO from "../../data/user";

import "./styles/Projects.css";
import Socials from "./Socials";

const Projects = () => {
    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="all-projects-container">
                    <div className="title about-title">
                        {INFO.project.title}
                    </div>
                    {INFO.project.projects.map((project, index) => (
                        <div className="all-projects-project" key={index}>
                            <Project
                                logo={project.logo}
                                title={project.title}
                                description={project.description}
                                image={project.img}
                                stack={project.stack}
                                linkText={project.linkText}
                                link={project.link}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Projects;

// <React.Fragment>
// 	<div className="content-wrapper">
// 		<div className="about-container">
// 			<div className="about-main">
// 				<div className="about-right-side">
// 					<div className="title about-title">
// 						{INFO.contact.title}
// 					</div>
// 					<div className="subtitle about-subtitle">
// 						{INFO.contact.description}
// 					</div>
// 					<div className="socials-container">
// 						<div className="contact-socials">
// 							<Socials/>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </React.Fragment>
