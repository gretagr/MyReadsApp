import React, { Component } from 'react';
import AddShelfButton from './AddShelfButton'
import PropTypes from 'prop-types'

class Book extends Component {
  render () {
    const { currentBook } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${currentBook.imageLinks.thumbnail}")` }}>

          </div>
          <AddShelfButton />
        </div>
        <div className="book-title">{currentBook.title}</div>
        <div className="book-authors">{currentBook.authors}</div>
      </div>
    )
  }
  static propTypes = {
    currentBook: PropTypes.object.isRequired
  }
}

export default Book
