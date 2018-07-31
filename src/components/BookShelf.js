import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {

  render () {
    const { shelfName, shelfKey, updateShelf, books } = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                books.filter(book => book.shelf === this.props.shelfKey).map(
                book => (
                  <li key={book.id}>
                    <Book
                      books={books}
                      currentBook={book}
                      handleChange={this.props.handleChange}
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
