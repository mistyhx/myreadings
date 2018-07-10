import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Book from './Book'

class Search extends Component {

    render(){
        return(

            <div>

                <Link to='/'> Back </Link>
                <input
                    type='text'
                    placeholder='Book or author name'
                />
                <Book />


            </div>
        );
    }
}

export default Search
