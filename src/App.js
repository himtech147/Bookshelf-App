import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import BookShelves from "./BookShelves";
import * as BooksApi from "./BooksAPI";

class BooksApp extends React.Component {
	state = {
		/**
		 * TODO: Instead of using this state variable to keep track of which page
		 * we're on, use the URL in the browser's address bar. This will ensure that
		 * users can use the browser's back and forward buttons to navigate between
		 * pages, as well as provide a good URL they can bookmark and share.
		 */
		showSearchPage: false,
		books: [],
	};

	componentDidMount() {
		BooksApi.getAll().then((books) => {
			this.setState(() => ({
				books,
			}));
		});
	}

	render() {
		return (
			<div className="app">
				<Route
					exact
					path="/"
					render={() => <BookShelves books={this.state.books} />}
				/>
				<Route
					path="/search"
					render={({ history }) => <SearchBooks></SearchBooks>}
				/>
			</div>
		);
	}
}

export default BooksApp;
