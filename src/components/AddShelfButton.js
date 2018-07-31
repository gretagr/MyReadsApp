import React, { Component } from 'react';

class AddShelfButton extends Component {

  render () {
    const { currentBook } = this.props
    return (
      <div className="book-shelf-changer">
        <select value={currentBook.shelf} onChange={(e) =>
          this.props.handleChange(currentBook, e.target.value)}>

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

export default AddShelfButton
