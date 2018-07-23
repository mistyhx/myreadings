import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import * as BooksAPI from "./BooksAPI";
import Bookshelves from "./Bookshelves";
import Search from "./Search";

class App extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      console.log(data);
      this.setState({
        books: data,
      });
    });
  }

  handleChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      console.log("after update" + JSON.stringify(res));
      this.getBookOnShelf();
    });
  };

  getBookOnShelf() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data,
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <Bookshelves booksOnShelf={this.state.books} />} />

        <Route
          path="/search"
          render={() => <Search booksInSearch={this.state.books} onChangeShelf={this.handleChange} />}
        />
      </div>
    );
  }
}

export default App;
