import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Book extends Component {
	static propTypes = {
		bookUrl: PropTypes.string.isRequired,
	};

	render() {
		const { bookUrl } = this.props;
		return (
			<div
				className="book-cover"
				style={{
					width: 128,
					height: 188,
					backgroundImage: `url(${bookUrl})`,
				}}
			></div>
		);
	}
}
