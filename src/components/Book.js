import React, { Component } from 'react';
import AddShelfButton from './AddShelfButton'
import PropTypes from 'prop-types'

class Book extends Component {
  render () {

    const { currentBook, books } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url('${currentBook.imageLinks && currentBook.imageLinks.thumbnail ? currentBook.imageLinks.thumbnail : null}')`
            }}>
          </div>
          <AddShelfButton
            books={books}
            currentBook = {currentBook}
            handleChange={this.props.handleChange}
           />
        </div>
        <div className="book-title">{currentBook.title ? currentBook.title : null}</div>
        <div className="book-authors">{currentBook.authors}</div>
      </div>
    )
  }
}
export default Book
