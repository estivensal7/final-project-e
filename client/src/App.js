import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/api";

class App extends React.Component {
	// componentDidMount() {

	// API.saveDonations({
	// 	eventName: "Name of New Event",
	// 	eventDate: "2020-05-17T01:08:49.643Z",
	// 	lunchNumber: 300,
	// 	eventDescription:
	// 		"These lunches will be available from 11am-2pm, Address Here/Phonenumber",
	// 	userName: "sampleUsername2",
	// }).then((res) => console.log(res));
	// API.allDonations().then((res) => console.log(res.data));

	// }

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
