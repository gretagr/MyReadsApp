import React, { Component } from 'react';
import PageTitle from './PageTitle'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

export default class Search extends Component {
  state = {
    searchBooks: [],
    query: '',
    prevQuery: ''
  }

  updateState = (query) => {
    this.setState({ query })
    this.onSearch(query)
  }

  onSearch = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then( (searchBooks) => {
        this.setState({ searchBooks })
        /* this block of code handles what happens when input field
        /* is empty but query still has one letter left.
        /* (this happens when space after last word is made and then all text deleted)*/
        this.setState({ prevQuery: query })
        if (this.state.prevQuery.length - 2 === '') {
          this.setState({ searchBooks: [] })
        }

      })
    }
    else if (query === '') {
      this.setState({ searchBooks: [] })
    }
  }

  render () {

    const { allBooks, title, handleChange } = this.props
    const { query, searchBooks, prevQuery } = this.state

    return (
      <React.Fragment>
        {/* ================  Page Title ==================*/}
        <PageTitle
          title={title}
        />
        {/* ================  Search Bar ==================*/}

        <div className="search-books-bar">
          <Link className="close-search" to="/"></Link>
          <div className="search-books-input-wrapper">
            <input
              value={query}
              type="text"
              placeholder="Search by title or author"
              onChange={ (event) => {
                this.updateState(event.target.value)
                 console.log('query:', query, 'prevQuery:', prevQuery)}}
            />
          </div>
        </div>

        <div className="search-books-result">
          <ol className="books-grid">
            {/* ================  Proceed Only If There Are Books in Books Array  ==================*/}
            { searchBooks.length > 0 && (
              /* ================  Map all searched books and pass info to book component  ==================*/
                searchBooks.map(searchedBook => {
              /* ================  Check if book already in bookshelfs of main page, then set shelf name  ==================*/
                allBooks.map(book => (
                  searchedBook.id === book.id ? searchedBook.shelf = book.shelf : null
                ))

                return (
                  <li key={searchedBook.id}>
                    <Book
                      currentBook={searchedBook}
                      allBooks={allBooks}
                      searchBooks={searchBooks}
                      handleChange={handleChange}
                    />
                  </li>
                )

              })
            )}
          </ol>
        </div>
      </React.Fragment>
    )
  }
}
