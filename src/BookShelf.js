import React, { Component } from "react";
import PropTypes from "prop-types";
import BookItem from "./BookItem";

export default class BookShelf extends Component {
	static propTypes = {
		shelfTitle: PropTypes.string.isRequired,
		shelfId: PropTypes.string.isRequired,
		shelfBooks: PropTypes.array.isRequired,
		handleSelector: PropTypes.func.isRequired,
	};

	render() {
		const { shelfTitle, shelfId, shelfBooks, handleSelector } = this.props;
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{shelfTitle}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{shelfBooks.map((book) => (
							<li key={book.id}>
								<BookItem
									book={book}
									shelfId={shelfId}
									handleSelector={handleSelector}
								/>
							</li>
						))}
					</ol>
				</div>
			</div>
		);
	}
}
