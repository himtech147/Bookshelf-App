import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import BookDetails from "./BookDetails";

// React Modal example taken from https://www.npmjs.com/package/react-modal. Other than the modal,
// the code in all files are my independent work.
export default class Book extends Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}

	static propTypes = {
		book: PropTypes.object.isRequired,
	};

	render() {
		const { book } = this.props;
		return (
			<div>
				<div
					onClick={this.handleOpenModal}
					className="book-cover"
					style={{
						width: 128,
						height: 188,
						backgroundImage: `url(${book.imageLinks.thumbnail})`,
					}}
				></div>
				<ReactModal
					isOpen={this.state.showModal}
					ariaHideApp={false}
					contentLabel="Book description"
					style={{ backgroundColor: "#fbded7" }}
				>
					<div className="book-details-main">
						<BookDetails className="book-details" book={book}></BookDetails>
						<button
							className="book-details-close"
							onClick={this.handleCloseModal}
						>
							X
						</button>
					</div>
				</ReactModal>
			</div>
		);
	}
}
