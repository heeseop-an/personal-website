import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import INFO from "../../data/user";

import "./styles/Socials.css";

const Socials = () => {
    return (
        <>
            <div className="socials-container">
                <a
                    href={INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="socials-icon">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="socials-icon"
                        />
                    </div>
                    <div className="socials-text">LinkedIn</div>
                </a>
            </div>
            <div className="socials-container">
                <a
                    href={`mailto:${INFO.main.email}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="socials-icon">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    <div className="socials-text">{INFO.main.email}</div>
                </a>
            </div>
        </>
    );
};

export default Socials;
