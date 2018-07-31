import React, { Component } from 'react';
import Main from './components/Main'
import Search from './components/Search'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class BooksApp extends Component {
  state = {
    books: []
  }
  /* ================  Get All Books ==================*/
  componentDidMount = () => {
    this.updateState(this.state.books)
  }

  updateState = (books) => {
    BooksAPI.getAll().then((books) => {
      this.setState(prevState => ({ books: books }))
    })
  }

  updateShelf = (book, shelf, books) => {
    BooksAPI.update(book, shelf)
    this.updateState(books)
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={ () => (
        <Main
          title={'My Reads'}
          books={this.state.books}
          handleChange={this.updateShelf}
        />
      )}/>
      <Route path='/Search' render={ () => (
        <Search
          title={'Search Books'}
          handleChange={this.updateShelf}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp
