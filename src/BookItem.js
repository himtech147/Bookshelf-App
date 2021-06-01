import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Book from "./Book";
import ShelfSelector from "./ShelfSelector";

// Udacity review
// PureComponent is exactly like React.Component with one difference= it implements shouldComponentUpdate. This allows it to prevent renders based on some heuristic. It implements this as a shallow equality check on the new props vs the old props, and likewise for state.
// But wait! PureComponent might not be the silver bullet for all components. When you have a state/props that are nested, the PureComponent is not a good fit because the checking that it does is really superficial. To make your component fast anyway, you should always implement the shouldComponentUpdate on React.Component.

export default class BookItem extends PureComponent {
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
				<div className="book-title">{book?.title}</div>
				<div className="book-authors">
					{book.authors && book?.authors.join(", ")}
				</div>
			</div>
		);
	}
}
