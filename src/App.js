import React, { Component } from 'react';
import Main from './Main'
import Search from './Search'
import PageTitle from './PageTitle'
import './App.css'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <PageTitle />
        <Main books={this.state.books}/>
      </div>
    )
  }
}

export default BooksApp
