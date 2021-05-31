import React, { Component } from "react";

export class LoadingScreen extends Component {
	render() {
		return (
			<div className="loader-screen">
				<div className="loader"></div>
				<p className="loader-text">Loading Book Shelf from Server</p>
			</div>
		);
	}
}

export default LoadingScreen;
