import React, { Component } from 'react';
import AddShelfButton from './AddShelfButton'
import PropTypes from 'prop-types'

export default class Book extends Component {
  render () {

  const { currentBook, allBooks, handleChange } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              /* ======== check is image exists ======== */
              backgroundImage: `url('${
              currentBook.imageLinks && currentBook.imageLinks.thumbnail ?
              currentBook.imageLinks.thumbnail : null}')`
            }}
          >
          </div>
          {/* ======== add button to select shelf, pass this book and update handler ======== */}
          <AddShelfButton
            currentBook={currentBook}
            handleChange={handleChange}
            allBooks={allBooks}
            searchBooks={this.props.searchBooks}
          />
        </div>
        {/* ======== check is title exists ======== */}
        <div className="book-title">{currentBook.title ? currentBook.title : null}</div>
        <div className="book-authors">{currentBook.authors}</div>
      </div>
    )
  }
}
