import React from "react";

import Characters from "./Characters";

import "./App.scss";

const Main = () => {
	return (
		<div className="App">
			<Characters />
			<footer className="footer">
				Made with <i className="fa fa-heart"></i> by Dermy
			</footer>
		</div>
	);
};

export default Main;
