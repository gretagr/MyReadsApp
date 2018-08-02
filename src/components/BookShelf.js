import React, { Component } from 'react';
import Book from './Book'

export default class BookShelf extends Component {

  render () {

    const { shelfName, shelfKey, handleChange, allBooks} = this.props;

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {/* ================= get all books and if they are assigned to a shelf, display books  ==================*/}
            {allBooks.filter(book => book.shelf === shelfKey).map(
              book => (
                <li key={book.id}>
                  <Book
                    allBooks={allBooks}
                    currentBook={book}
                    handleChange={handleChange}
                  />
                </li>
              )
            )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
