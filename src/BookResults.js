import React, { Component } from 'react'
import BookShelf from './BookShelf'
import SearchButton from './SearchButton'

class BookResults extends Component {
  state = {
    books : [],
  }
  render() {
        const books = this.props.books
        console.log("Books", books)
        return (
            <div className="list-books">
              <div className="list-books-content">
                <div>
                  <BookShelf 
                      books={this.props.books}
                      handleBookMove={this.props.handleBookMove}
                      shelf={{title: "", 
                        name: ""}} />
                </div>
              </div>
            </div>
        )
    }
}

export default BookResults
