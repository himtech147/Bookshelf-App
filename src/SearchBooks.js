import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";
import PropTypes from "prop-types";

export class SearchBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		handleSelector: PropTypes.func.isRequired,
	};

	state = {
		query: "",
	};
	searchQuery = (query) => {
		this.setState(() => ({
			query: query,
		}));
	};

	render() {
		const { query } = this.state;
		const { books, handleSelector } = this.props;
		const showingBooks =
			query === ""
				? []
				: books.filter(
						(b) =>
							b.title.toLowerCase().includes(query.toLowerCase()) ||
							b.authors.join(", ").toLowerCase().includes(query.toLowerCase())
				  );
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to="/" className="close-search">
						Close
					</Link>

					<div className="search-books-input-wrapper">
						{/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={(event) => this.searchQuery(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid-search">
						{showingBooks.map((book) => (
							<li key={book.id}>
								<BookItem
									book={book}
									shelfId={book.shelf || "none"}
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

export default SearchBooks;
