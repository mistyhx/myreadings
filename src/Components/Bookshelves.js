import React, { Component } from "react";
import Header from "./Header";
import Bookshelf from "./Bookshelf";
import { Link } from "react-router-dom";

import * as BooksAPI from "../BooksAPI";

class Bookshelves extends Component {
  state = {};

  handleChange = (bookId, e) => {
    const book = this.props.booksOnShelf.filter(t => t.id === bookId)[0];
    book.shelf = e.target.value;
    BooksAPI.update(book, e.target.value).then(() => {
      this.setState({
        books: this.props.booksOnShelf,
      });
    });
  };

  render() {
    return (
      <div>
        <Header title="My readings" />
        <Bookshelf
          key="currently"
          books={this.props.booksOnShelf.filter(book => book.shelf === "currentlyReading")}
          bookshelfTitle="Currently Reading"
          onChangeShelf={this.handleChange}
        />
        <Bookshelf
          key="wantToRead"
          books={this.props.booksOnShelf.filter(book => book.shelf === "wantToRead")}
          bookshelfTitle="Want to Read"
          onChangeShelf={this.handleChange}
        />
        <Bookshelf
          key="read"
          books={this.props.booksOnShelf.filter(book => book.shelf === "read")}
          bookshelfTitle="Read"
          onChangeShelf={this.handleChange}
        />
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Bookshelves;
