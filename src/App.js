import React from "react";
import "./App.scss";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";

import Characters from "./Characters";

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<header className="app-header">
					<h1 className="title">Rick and Morty </h1>
				</header>
				<Characters />
			</div>
		</ApolloProvider>
	);
}

export default App;
