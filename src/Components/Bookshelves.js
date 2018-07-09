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
                        {this.props.books}
                    </ol>
                </div>
            </div>
        );
    }
}

export default Bookshelf;
