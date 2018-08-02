import React, { Component } from 'react';

export default class AddShelfButton extends Component {

  render () {

  const { currentBook, handleChange } = this.props
  /* ======== check if book already in some shelf in the main page ======== */
  const name = currentBook.shelf ? currentBook.shelf : 'none'

    return (
      <div className="book-shelf-changer">

        <select
          onChange={ (event) => {handleChange(currentBook, event.target.value)} }
          value={name}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>

      </div>
    )
  }
}
