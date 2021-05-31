import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ShelfSelector extends Component {
	static propTypes = {
		handleSelector: PropTypes.func.isRequired,
		book: PropTypes.object.isRequired,
		shelfId: PropTypes.string.isRequired,
	};

	state = {
		value: this.props.shelfId,
	};

	changeValue = (event) => {
		this.setState({
			value: event.target.value,
		});
		this.props.handleSelector(this.props.book, event.target.value);
	};
	render() {
		return (
			<div>
				<select onChange={this.changeValue} value={this.state.value}>
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
