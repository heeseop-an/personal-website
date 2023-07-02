import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/Logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src={process.env.PUBLIC_URL + '/' + INFO.main.logo} alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;