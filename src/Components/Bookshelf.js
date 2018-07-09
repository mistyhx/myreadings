import React, {Component} from 'react'
import Book from './Book'


const divStyle={
    borderBottom: "1px solid grey"
};

class Bookshelf extends Component{

    state ={};

    render(){
        return(

            <div style={divStyle}>
                <h2>{this.props.bookshelfTitle}</h2>
                <div>
                    <ol>
                        {this.props.books.map((book, i) => <li key={i}> <div style={{ width: 128,
                            height: 193,backgroundImage: "url(" + book.imageLinks.thumbnail + ")"}}/></li>)}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;
