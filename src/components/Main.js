import React, { Component } from 'react';
import PageTitle from './PageTitle'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class Main extends Component {
  render () {
    const shelves = [
      {name: 'currentlyReading', title: 'Currenty Reading'},
      {name: 'wantToRead', title: 'Want To Read'},
      {name: 'read', title: 'Read'}
    ]
    const { books, title } = this.props
    return (
      <React.Fragment>
        {/* ================  Page Title ==================*/}
        <PageTitle
          title={title}
        />
        {/* ================  Go To Search Page ==================*/}
        <div className="open-search">
          <Link to='/Search'>Add a book</Link>
        </div>

        {/* ================  Display Shelves ==================*/}
        <div className="list-books-content">
          {/* <BookShelf shelfName='Currently Reading' shelfKey='currentlyReading' books={books} handleChange={this.props.handleChange}/>
          <BookShelf shelfName='Want To Read' shelfKey='wantToRead' books={books} handleChange={this.props.handleChange}/>
          <BookShelf shelfName='Read' shelfKey='read' books={books} handleChange={this.props.handleChange}/> */}
          {shelves.map( shelve => (
            <BookShelf key={shelve.title}
              shelfName={shelve.title}
              shelfKey={shelve.name}
              books={books}
              handleChange={this.props.handleChange}
            />
          ))}
        </div>
        />

      </React.Fragment>
    )
  }
}

export default Main
