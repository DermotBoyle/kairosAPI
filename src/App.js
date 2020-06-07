import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import IndividualCharacter from "./IndividualCharater";

import Main from "./Main";

import Header from "./components/Header";

function App() {
	return (
		<Router>
			<Header />
			<ApolloProvider client={client}>
				<Switch>
					<Route exact path="/" component={Main}></Route>
					<Route
						exact
						path="/IndividualCharacter/:step"
						render={(props) => <IndividualCharacter {...props} />}
					/>
				</Switch>
			</ApolloProvider>
		</Router>
	);
}

export default App;
