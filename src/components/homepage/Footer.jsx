import React from "react";
import "./styles/Footer.css";

const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="footer-links">
                    <ul className="footer-nav-link-list">
                        <li className="footer-nav-link-item">
                            <a href="#home">Home</a>
                        </li>
                        <li className="footer-nav-link-item">
                            <a href="#about">About</a>
                        </li>
                        <li className="footer-nav-link-item">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="footer-nav-link-item">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Footer;
