import React from "react";
import "./styles/Contact.css";
import Socials from "./Socials";
import INFO from "../../data/user";

const Contact = () => {
    return (
        <React.Fragment>
            <div className="content-wrapper">
                <div className="about-container">
                    <div className="about-main">
                        <div className="about-right-side">
                            <div className="title about-title">
                                {INFO.contact.title}
                            </div>
                            <div className="subtitle about-subtitle">
                                {INFO.contact.description}
                            </div>
                            <div className="socials-container">
                                <div className="contact-socials">
                                    <Socials/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Contact;
