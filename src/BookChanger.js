import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookChanger extends Component {
  getShelfFromBook(book) {
    const bookFound = this.props.books.find(b => b.id === book.id);

    if (bookFound) {
      return bookFound.shelf;
    } else {
      return 'none'
    }
  }
  
  render() {
    const books = this.props.books
    const options = ['Move to...', 'Currently Reading', 'Want to Read', 'Read', 'None']
    return (
      <div className="book-shelf-changer">
        <select
          onChange={event => this.props.handleBookMove(this.props.book, event.target.value)}
          value={this.getShelfFromBook(this.props.book)}
        >
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }  
}

export default BookChanger