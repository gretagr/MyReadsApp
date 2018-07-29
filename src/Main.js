import React, { Component } from 'react';
import PageTitle from './PageTitle'
import BookShelf from './BookShelf'

class Main extends Component {
  render () {
    return (
      <div className="list-books">
        <div className="list-books-content">
          <BookShelf shelfName='currentlyReading' books={this.props.books}/>
          <BookShelf shelfName='wantToRead' books={this.props.books}/>
          <BookShelf shelfName='read' books={this.props.books}/>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default Main
