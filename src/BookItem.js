import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import ShelfSelector from "./ShelfSelector";

export default class BookItem extends Component {
	static propTypes = {
		book: PropTypes.object.isRequired,
		shelfId: PropTypes.string.isRequired,
		handleSelector: PropTypes.func.isRequired,
	};

	render() {
		const { book, shelfId, handleSelector } = this.props;
		return (
			<div className="book">
				<div className="book-top">
					<Book book={book}></Book>
					<div className="book-shelf-changer">
						<ShelfSelector
							handleSelector={handleSelector}
							book={book}
							shelfId={shelfId}
						/>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{book.authors.join(", ")}</div>
			</div>
		);
	}
}
