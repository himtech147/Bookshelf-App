import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";
import { Link } from "react-router-dom";
export default class BookShelves extends Component {
	static propTypes = {
		filterBooksBy: PropTypes.func.isRequired,
	};

	render() {
		const { filterBooksBy } = this.props;
		return (
			<div>
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							<BookShelf
								shelfTitle="Currently Reading"
								shelfBooks={filterBooksBy("currentlyReading")}
							/>
							<BookShelf
								shelfTitle="Want to Read"
								shelfBooks={filterBooksBy("wantToRead")}
							/>
							<BookShelf shelfTitle="Read" shelfBooks={filterBooksBy("read")} />
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
