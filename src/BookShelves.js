import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";

export default class BookShelves extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
	};

	state = {
		shelfBooks: [],
	};

	filterBooks = (books) => (shelf) => {
		return books.filter((book) => {
			return book.shelf === shelf;
		});
	};
	filterBooksBy = this.filterBooks(this.props.books);

	render() {
		const { books } = this.props;
		return (
			<div>
				<div className="list-books">
					<div className="list-books-title">
						<h1>📚 Welcome to My BookShelf 😀</h1>
					</div>
					<div className="list-books-content">
						<div>
							<BookShelf
								shelfTitle="Currently Reading"
								shelfBooks={this.filterBooks(books)("currentlyReading")}
							/>

							<BookShelf
								shelfTitle="Want to Read"
								shelfBooks={this.filterBooks(books)("wantToRead")}
							/>
							<BookShelf
								shelfTitle="Read"
								shelfBooks={this.filterBooks(books)("read")}
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
