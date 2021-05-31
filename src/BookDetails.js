import React, { Component } from "react";
import PropTypes from "prop-types";

export default class BookDetails extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
	};

	render() {
		const { book } = this.props;
		return (
			<div className="book-details">
				<h2>Book Details</h2>
				<div
					onClick={this.handleOpenModal}
					className="book-cover book-details-cover"
					style={{
						width: 128,
						height: 188,
						backgroundImage: `url(${book.imageLinks.thumbnail})`,
					}}
				></div>
				<p>
					<b>Title :</b>
					{book.title}
				</p>
				<p>
					<b>Authors :</b>
					{book.authors.join(", ")}
				</p>
				<p>
					<b>Rating :</b>
					{book.averageRating || "NA"}
				</p>
				<div>
					<b>Description: </b>
					{book.description}
				</div>
			</div>
		);
	}
}
