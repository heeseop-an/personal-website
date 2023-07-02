import React from "react";
import "./styles/Contact.css";
import Socials from "./Socials";
import INFO from "../../data/user";

const Contact = () => {
    return (
        <React.Fragment>
            <div className="contact-container">
                <div className="contact-main">
                    <div className="contact-left-side">
                        <div className="title contact-title">
                            {INFO.contact.title}
                        </div>
                        <div className="subtitle contact-subtitle">
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
        </React.Fragment>
    );
};

export default Contact;
