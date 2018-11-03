import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class BookChanger extends Component {

  state = {
    shelf: ""
  }


  componentWillMount() {
    BooksAPI.get(this.props.book.id).then((book) => {
      this.setState({"shelf": book.shelf}) 
    }).catch((err) => {
      return "none"
    })
  }
  
  render() {
    const books = this.props.books
    const options = ['Move to...', 'Currently Reading', 'Want to Read', 'Read', 'None']
    return (
      <div className="book-shelf-changer">
        <select
          onChange={event => this.props.handleBookMove(this.props.book, event.target.value)}
          value={this.state.shelf}
        >
          <option value="" disabled>Move to...</option>
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