import React from "react";

import logo from "../images/rickmortylogo.svg";

import "./Header.scss";
import { useHistory } from "react-router";

const Header = () => {
	const history = useHistory();
	return (
		<header
			className="app-header"
			style={{ cursor: "pointer" }}
			onClick={() => history.push("/")}>
			<img src={logo} alt="logo" className="logo" />
		</header>
	);
};

export default Header;
