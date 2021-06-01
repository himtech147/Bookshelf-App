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

	async componentDidMount() {
		const books = await BooksApi.getAll();
		this.setState({ books });
	}

	handle_selector = (book, new_shelf) => {
		const index = this.state.books.findIndex((x) => x.title === book.title);
		BooksApi.update(book, new_shelf).then(() => {
			if (index !== -1) {
				const newBooks = this.state.books.slice();
				newBooks[index].shelf = new_shelf;

				this.setState((currentState) => ({
					books: [...newBooks],
				}));
				console.log(`Moved book with ${book.title} to shelf ${new_shelf}`);
			} else {
				book.shelf = new_shelf;
				this.setState((currentState) => ({
					books: currentState.books.concat([book]),
				}));
				console.log(`Added ${book.title} to shelf ${new_shelf}`);
			}
		});
	};

	shouldComponentUpdate(nextProps, nextState) {
		if (this.state.books !== nextState.books) {
			return true;
		}
		return false;
	}

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
