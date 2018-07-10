import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelves from '../../myreadings/src/Components/Bookshelves'
import Search from '../../myreadings/src/Components/Search'
import {Route} from 'react-router-dom'
import './App.css'


class App extends React.Component {
    state = {

        books:[]


    }

    componentDidMount(){

        BooksAPI.getAll().then(
            data => {

                console.log(data)
                this.setState({
                    books:data
                });
            }
        );
    }


    render() {
        return (
            <div className="app">

                <Route exact path="/"
                       render={()=>(<Bookshelves booksOnShelf={this.state.books}/>)}

                />

                <Route path="/search" render={()=>(<Search />)}/>

            </div>
        )
    }
}

export default App
