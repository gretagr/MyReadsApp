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
              currentBook.imageLinks.thumbnail : 'https://dummyimage.com/128x170/dfdcbb/ffffff&text=No+Image'}')`
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
        <div className="book-title">{currentBook.title ? currentBook.title : 'Unknown Title'}</div>
        <div className="book-authors">{currentBook.authors ? currentBook.authors : 'Unknown Author'}</div>
      </div>
    )
  }
}
