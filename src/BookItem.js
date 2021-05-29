import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import ShelfSelector from "./ShelfSelector";

export default class BookItem extends Component {
	static propTypes = {
		bookUrl: PropTypes.string.isRequired,
		bookTitle: PropTypes.string.isRequired,
		bookAuthors: PropTypes.array.isRequired,
	};

	render() {
		const { bookUrl, bookTitle, bookAuthors } = this.props;
		return (
			<div className="book">
				<div className="book-top">
					<Book bookUrl={bookUrl}></Book>
					<div className="book-shelf-changer">
						<ShelfSelector />
					</div>
				</div>
				<div className="book-title">{bookTitle}</div>
				<div className="book-authors">{bookAuthors.join(", ")}</div>
			</div>
		);
	}
}
