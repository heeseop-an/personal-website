import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/Socials.css";

const Socials = () => {
    return (
        <div className="socials">
            <div className="social">
                <a
                    href={INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="social-icon">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="social-icon"
                        />
                    </div>
                    <div className="social-text">LinkedIn</div>
                </a>
            </div>
            <div className="social">
                <a
                    href={`mailto:${INFO.main.email}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    <div className="social-text">{INFO.main.email}</div>
                </a>
            </div>
        </div>
    );
};

export default Socials;
