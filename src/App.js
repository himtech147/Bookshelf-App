import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import BookShelves from "./BookShelves";
import * as BooksApi from "./BooksAPI";
import LoadingScreen from "./LoadingScreen";

class BooksApp extends React.Component {
	state = {
		books: [],
	};

	componentDidMount() {
		BooksApi.getAll().then((books) => {
			this.setState(() => ({
				books,
			}));
			console.log(books);
		});
	}

	handle_selector = (book, new_shelf) => {
		console.log(book.id);
		console.log(new_shelf);
		console.log(this.state.books);
		const index = this.state.books.findIndex((x) => x.title === book.title);
		const newBooks = this.state.books.slice();
		console.log("ind", index);
		BooksApi.update(book, new_shelf).then(() => {
			console.log("book", book);
			newBooks[index].shelf = new_shelf;

			this.setState((currentState) => ({
				books: [...currentState.books],
			}));
		});
		console.log("new", this.state.books);
	};

	render() {
		return (
			<div className="app">
				{this.state.books.length === 0 ? (
					<LoadingScreen />
				) : (
					<div>
						<Route
							exact
							path="/"
							render={() => (
								<BookShelves
									books={this.state.books}
									handleSelector={this.handle_selector}
								/>
							)}
						/>
						<Route
							path="/search"
							render={() => (
								<SearchBooks
									books={this.state.books}
									handleSelector={this.handle_selector}
								/>
							)}
						/>
					</div>
				)}
			</div>
		);
	}
}

export default BooksApp;
