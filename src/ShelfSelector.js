import React, { Component } from "react";
// import PropTypes from "prop-types";

export default class ShelfSelector extends Component {
	// static propTypes = {};

	render() {
		return (
			<div>
				<select>
					<option className="option-style" value="move" disabled>
						Move to...
					</option>
					<option className="option-style" value="currentlyReading">
						Currently Reading
					</option>
					<option className="option-style" value="wantToRead">
						Want to Read
					</option>
					<option className="option-style" value="read">
						Read
					</option>
					<option className="option-style" value="none">
						None
					</option>
				</select>
			</div>
		);
	}
}
