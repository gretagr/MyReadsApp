import React, { Component } from 'react';
import PageTitle from './PageTitle'
import { Link } from 'react-router-dom'
import Book from './Book'

export default class Search extends Component {

  render () {

    const { query, updateState, searchBooks, allBooks } = this.props

    return (
      <React.Fragment>
        {/* ================  Page Title ==================*/}
        <PageTitle
          title={this.props.title}
        />
        {/* ================  Search Bar ==================*/}

        <div className="search-books-bar">
          <Link className="close-search" to="/"></Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={ (event) => updateState(event.target.value)}
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
                      handleChange={this.props.handleChange}
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
