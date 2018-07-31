import React, { Component } from 'react';
import PageTitle from './PageTitle'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends Component {

  state = {
    query: '',
    books: []
  }

  updateState = (query) => {
    this.setState({ query: query })
    this.onSearch(query)
  }

  onSearch = (query) => {
    if (query) {
      const string =
      BooksAPI.search(query).then( (searchedBooks) => {
        this.setState({ books: searchedBooks })
      })}
    else {
      this.setState({ books: [] })
    }
  }

  render () {
    const { query, books } = this.state
    return (
      <React.Fragment>
        {/* ================  Page Title ==================*/}
        <PageTitle
          title={this.props.title}
        />
        {/* ================  Search Bar ==================*/}

        <div className="search-books-bar">
          {/* ================  Link to Main Page  ==================*/}
          <Link className="close-search" to="/"></Link>
          <div className="search-books-input-wrapper">
            {/* ================  Search Input ==================*/}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={ (event) => this.updateState(event.target.value)}
            />
          </div>
        </div>
        {/* ================  Searched Books ==================*/}
        <div className="search-books-result">
          {/* ================  Proceed Only If There Are Books in Books Array  ==================*/}
          { books.length > 0 && (
          <ol className="books-grid">
              {books.map(book => (
                <li key={book.id}>
                  <Book
                    currentBook={book}
                  />
                </li>
              ))
            }
          </ol>
        )}
        </div>
      </React.Fragment>
    )
  }
}

export default Search
