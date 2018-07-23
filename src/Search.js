import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

class Search extends Component {
  state = {
    query: "",
    books: [],
  };

  updateQuery = query => {
    this.setState({
      query: query,
    });
    const trimeedQuery = query.trim();
    if (trimeedQuery)
      BooksAPI.search(trimeedQuery, 100).then(books => {
        if (books.error) this.setState({ books: [] });
        else this.setState({ books });
      });
  };

  updateBookOnSearch = (book, shelf) => {
    let temp = this.state.books;
    const bookToUpdate = temp.filter(t => t.id === book)[0];
    bookToUpdate.shelf = shelf;
    this.setState({
      books: temp,
    });
    this.props.onChangeShelf(book, shelf);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Back
          </Link>
          <input
            type="text"
            placeholder="search by title or author"
            value={this.state.query}
            onChange={e => this.updateQuery(e.target.value)}
          />
        </div>
        <div className="search-books-results">
          <ol>
            {this.state.books.map(book => (
              <li key={book.id} className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: "url(" + book.imageLinks.thumbnail + ")",
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={e => this.updateBookOnSearch(book.id, e.target.value)}>
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">Currently reading</option>
                      <option value="wantToRead">Want to read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
