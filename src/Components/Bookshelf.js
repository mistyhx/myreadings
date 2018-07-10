import React, {Component} from 'react'


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
                      {this.props.books.map(book =>

                          <li key={book.id} className="book">
                              <div className="book-cover"
                                   style={{
                                  width: 128,
                                  height: 193,
                                  backgroundImage: "url(" + book.imageLinks.thumbnail + ")"
                              }}>
                              </div>
                              <div className="book-title">
                                  {book.title}
                              </div>

                          </li>


                      )
                      }
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;
