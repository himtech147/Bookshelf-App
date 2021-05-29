import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ShelfSelector extends Component {
	static propTypes = {
		prop: PropTypes,
	};

	render() {
		return (
			<div>
				<select>
					<option value="move" disabled>
						Move to...
					</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		);
	}
}
