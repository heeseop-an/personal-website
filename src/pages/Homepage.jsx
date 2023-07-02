import React from "react";
import {Helmet} from "react-helmet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Logo from "../components/homepage/Logo";
import Footer from "../components/homepage/Footer";
import NavBar from "../components/homepage/NavBar";
import Contact from "../components/homepage/Contact";
import Projects from "../components/homepage/Projects";
import INFO from "../data/user";
import "./styles/Homepage.css";
import About from "../components/homepage/About";

const Homepage  = () => {

    const logoStyle = {
        display: "flex",
        size: 80,
        zIndex: 999,
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{INFO.main.title}</title>
            </Helmet>

            <div className="page-content">
                <NavBar/>
                <div className="content-wrapper">
                    <div className="homepage-logo-container"
                         id='home'>
                        <div style={logoStyle}>
                            <Logo width={logoStyle.size} link={false}/>
                        </div>
                    </div>

                    <div className="homepage-container">
                        <div className="homepage-first-area">
                            <div className="homepage-first-area-left-side">
                                <div className="title homepage-title">
                                    {INFO.homepage.title}
                                    <br/>
                                    {INFO.homepage.subTitle}
                                </div>
                                <div className="subtitle homepage-subtitle">
                                    {INFO.homepage.description}
                                    <br/>
                                </div>
                            </div>
                        </div>
                        <div className="homepage-socials">
                            <a
                                href={INFO.socials.linkedin}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="homepage-social-icon"
                                />
                            </a>
                            <a
                                href={INFO.socials.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="homepage-social-icon"
                                />
                            </a>
                        </div>


                        <div className="homepage-about"
                             id='about'>
                            <About/>
                        </div>

                        <div className="homepage-projects"
                             id='projects'>
                            <Projects/>
                        </div>

                        <div className="homepage-contact"
                             id='contact'>
                            <Contact/>
                        </div>

                        <div className="page-footer">
                            <Footer/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Homepage;
