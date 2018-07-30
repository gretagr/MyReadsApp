import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {

  render () {
    const { shelfName, shelfKey } = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books.filter(book => book.shelf === shelfKey).map(
                book => (
                  <li key={book.id}>
                    <Book
                      currentBook={book}
                    />
                  </li>
                )
              )
            }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default BookShelf
