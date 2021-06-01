import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookItem from "./BookItem";
import PropTypes from "prop-types";
import * as BooksApi from "./BooksAPI";
import { DebounceInput } from "react-debounce-input";

export class SearchBooks extends Component {
	static propTypes = {
		books: PropTypes.array.isRequired,
		handleSelector: PropTypes.func.isRequired,
	};

	state = {
		query: "",
		allBooks: [],
	};
	async handleSearch(query, shelfBooks) {
		let allBooks = await BooksApi.search(query);
		if (Array.isArray(allBooks)) {
			shelfBooks.forEach(function (shelfBook) {
				let index = allBooks.findIndex((x) => x.id === shelfBook.id);
				console.log(index);
				if (index !== -1) {
					allBooks[index].shelf = shelfBook.shelf;
				}
			});
		}

		this.setState({ allBooks });
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.query !== this.state.query) {
			this.handleSearch(this.state.query, this.props.books);
		}
	}

	searchQuery = (query) => {
		this.setState(() => ({
			query: query,
		}));
	};

	render() {
		const { query } = this.state;
		const { books, handleSelector } = this.props;
		let showingBooks = [];
		if (Array.isArray(this.state.allBooks)) {
			showingBooks =
				query === ""
					? []
					: this.state.allBooks.filter(
							(b) =>
								(b.title &&
									b.title.toLowerCase().includes(query.toLowerCase())) ||
								(b.authors &&
									b.authors
										.join(", ")
										.toLowerCase()
										.includes(query.toLowerCase()))
					  );
		}

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
						<DebounceInput
							minLength={2}
							debounceTimeout={300}
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
