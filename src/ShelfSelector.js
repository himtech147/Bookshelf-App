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

	shelves = [
		{ value: "currentlyReading", label: "Currently Reading" },
		{ value: "wantToRead", label: "Want to Read" },
		{ value: "read", label: "Read" },
		{ value: "none", label: "None" },
	];

	render() {
		return (
			<div>
				<select onChange={this.changeValue} value={this.state.value}>
					<option className="option-style" value="move" disabled>
						Move to...
					</option>
					{this.shelves.map((item) => (
						<option
							key={item.value}
							className="option-style"
							value={item.value}
						>
							{item.label}
						</option>
					))}
				</select>
			</div>
		);
	}
}
