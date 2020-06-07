import React from "react";

import logo from "../images/rickmortylogo.svg";

import "./Header.scss";

const Header = () => {
	return (
		<header className="app-header">
			<img src={logo} alt="" className="logo" />
		</header>
	);
};

export default Header;
