import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

import "./styles/Project.css";

const Project = (props) => {
    const {logo, title, description, linkText, link, stack, image} = props;

    return (
        <React.Fragment>
            <div className="project">
                <Link to={link}>
                    <div className="project-container">
                        <div className="project-main">
                            <div className="about-left-side">
                                {/*<div className="project-logo">*/}
                                {/*	<img src={logo} alt="logo" />*/}
                                {/*</div>*/}
                                <div className="project-title">{title}</div>
                                <div className="project-description">{description}</div>
                                <div className="project-stack">{stack}</div>
                                <div className="project-link">
                                    <div className="project-link-icon">
                                        <FontAwesomeIcon icon={faLink}/>
                                    </div>

                                    <div className="project-link-text">{linkText}</div>
                                </div>
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
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Project;
