import React, {useState, useEffect} from "react";
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

const Homepage = () => {
    const [stayLogo, setStayLogo] = useState(false);
    const [logoSize, setLogoSize] = useState(80);
    const [oldLogoSize, setOldLogoSize] = useState(80);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         let scroll = Math.round(window.pageYOffset, 2);
    //
    //         let newLogoSize = 80 - (scroll * 4) / 10;
    //
    //         if (newLogoSize < oldLogoSize) {
    //             if (newLogoSize > 40) {
    //                 setLogoSize(newLogoSize);
    //                 setOldLogoSize(newLogoSize);
    //                 setStayLogo(false);
    //             } else {
    //                 setStayLogo(true);
    //             }
    //         } else {
    //             setLogoSize(newLogoSize);
    //             setStayLogo(false);
    //         }
    //     };
    //
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, [logoSize, oldLogoSize]);


    const logoStyle = {
        display: "flex",
        position: stayLogo ? "fixed" : "relative",
        top: stayLogo ? "3vh" : "auto",
        zIndex: 999,
        border: stayLogo ? "1px solid white" : "none",
        borderRadius: stayLogo ? "50%" : "none",
        boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
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
                            <Logo width={logoSize} link={false}/>
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
