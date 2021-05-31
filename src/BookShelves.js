import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

export default class BookShelves extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		handleSelector: PropTypes.func.isRequired,
	};

	filterBooks = (books) => (shelf) => {
		return books.filter((book) => {
			return book.shelf === shelf;
		});
	};
	filterBooksBy = this.filterBooks(this.props.books);

	render() {
		const { books, handleSelector } = this.props;
		return (
			<div>
				<div className="list-books">
					<div className="list-books-title">
						<h1>📚 BookShelf 📚</h1>
					</div>
					<div className="list-books-content">
						<div>
							<BookShelf
								shelfTitle="Currently Reading"
								shelfId="currentlyReading"
								shelfBooks={this.filterBooks(books)("currentlyReading")}
								handleSelector={handleSelector}
							/>

							<BookShelf
								shelfTitle="Want to Read"
								shelfId="wantToRead"
								shelfBooks={this.filterBooks(books)("wantToRead")}
								handleSelector={handleSelector}
							/>
							<BookShelf
								shelfTitle="Read"
								shelfId="read"
								shelfBooks={this.filterBooks(books)("read")}
								handleSelector={handleSelector}
							/>
						</div>
					</div>
					<div className="open-search">
						<Link className="open-search-button" to="/search">
							Search
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
