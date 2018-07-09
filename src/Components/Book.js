import React, {Component} from 'react'

class Book extends Component {
    render(){
        return(
            <div>
                <img name='bookcover'/>
                <h3>{this.props.booktitle}</h3>
                <h5>{this.props.bookauthor}</h5>

                <div>
                    <button> Move </button>
                    <div>
                        Move to...
                        <ul>
                            <li>Currently Reading</li>
                            <li>Want to read</li>
                            <li>Read</li>
                            <li>None</li>
                        </ul>

                    </div>
                </div>


            </div>
        );
    }
}

export default Book;
