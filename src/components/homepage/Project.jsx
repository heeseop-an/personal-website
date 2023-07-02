import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./styles/Project.css";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
    const {title, description, linkText, link, stack, image} = props;

    return (
        <React.Fragment>
            <div className="project">
                <div className="project-container">
                    <div className="project-main">
                        <div className="project-left-side">
                            <div className="project-title">{title}</div>
                            <div className="project-description">{description}</div>
                            <div className="project-stack">{stack}</div>
                            <Link to={link}>
                                <div className="project-link">
                                    <div className="project-link-icon">
                                        <FontAwesomeIcon icon={faGithub}/>
                                    </div>
                                    <div className="project-link-text">{linkText}</div>
                                </div>
                            </Link>
                        </div>
                        <div className="project-right-side">
                            <div className="project-image-container">
                                <div className="project-image-wrapper">
                                    <img
                                        src={image}
                                        alt="about"
                                        className="project-image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;

