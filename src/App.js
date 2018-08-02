import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Search from './components/Search'
import PageTitle from './components/PageTitle'
import BookShelf from './components/BookShelf'
import LoadingScreen from 'react-loading-screen'
import './App.css'


export default class BooksApp extends Component {
  state = {
    books: [],
    loading: true
  }
  /* ================  Get All Books ==================*/

  componentDidMount = () => {

    BooksAPI.getAll().then((books) => {
      this.setState({ books, loading: false })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }



  render() {
    const shelves = [
      {name: 'currentlyReading', title: 'Currenty Reading'},
      {name: 'wantToRead', title: 'Want To Read'},
      {name: 'read', title: 'Read'}
    ]
    return (
      <React.Fragment>
        {/* ================  Render Main Page ==================*/}

        <Route exact path='/' render={ () => (

          <React.Fragment>

            {/* ================  page title for main page ==================*/}
            <PageTitle
              title={'My Reads'}
            />

            {/* ================  link to search page ==================*/}
            <div className="open-search">
              <Link to='/Search'>Add a book</Link>
            </div>

            {/* ================  Display Shelves:
            /* for every object in shelves array, add BookShelf component
            /* and send props to this component.
            /* ==================*/}

            <div className="list-books-content">
              <LoadingScreen
                loading={this.state.loading}
                bgColor='linear-gradient(to bottom right, #53c1eb 0%, #6cd8ba 100%)'
                spinnerColor='#ffffff'
                textColor='#ffffff'
                logoSrc='bookmark.png'
                text='MY READS'
              >
              {shelves.map( shelve => (
                <BookShelf
                  key={shelve.title}
                  shelfName={shelve.title}
                  shelfKey={shelve.name}
                  allBooks={this.state.books}
                  handleChange={this.updateShelf}
                />
              ))}
                </LoadingScreen>
            </div>
          </React.Fragment>

        )}
      />
      {/* ================  Render Seatch Page ==================*/}
        <Route path='/Search' render={ () => (

            <Search
              title={'Search Books'}
              updateState={this.updateState}
              allBooks={this.state.books}
              handleChange={this.updateShelf}
            />
          )}
        />
      </React.Fragment>
    )
  }
}
