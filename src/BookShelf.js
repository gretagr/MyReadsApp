import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {

  render () {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.filter(book => book.shelf === this.props.shelfName).map(
                book => (
                  <li key={book.id}><Book /></li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf
