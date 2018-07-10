import React, {Component} from 'react'
import Header from "./Header";
import Bookshelf from "./Bookshelf"



class Bookshelves extends Component{

    state ={};

    render(){
        return(
          <div>
        <Header title="My readings"/>
            <Bookshelf books={this.props.booksOnShelf} />
          </div>
            );
    }
}

export default Bookshelves;
