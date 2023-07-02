import React, {useEffect} from "react";
import INFO from "../../data/user";
import "./styles/About.css";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <div className="about-container">
                <div className="about-main">
                    <div className="about-left-side">
                        <div className="title about-title">
                            {INFO.about.title}
                        </div>
                        <div className="subtitle about-subtitle">
                            <p>
                                {INFO.about.body1}
                            </p>
                            <p>
                                {INFO.about.body2}
                            </p>
                            <p>
                                {INFO.about.body3}
                            </p>
                        </div>
                    </div>

                    <div className="about-right-side">
                        <div className="about-image-container">
                            <div className="about-image-wrapper">
                                <img
                                    src={process.env.PUBLIC_URL + '/' + INFO.about.img}
                                    alt="about"
                                    className="about-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;
