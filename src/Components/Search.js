import React, { Component } from "react";
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
                    <select value={book.shelf} onChange={e => this.props.onChangeShelf(book.id, e)}>
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
