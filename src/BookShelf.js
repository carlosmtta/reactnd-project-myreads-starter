import React, { Component } from 'react'
import Books from './Books'

class BookShelf extends Component {

  render() {
    return(
    <div className="bookshelf">
    <h2 className="bookshelf-title">{ this.props.shelf.title }</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Books 
            books={this.props.books}
            handleBookMove={this.props.handleBookMove}
            shelf={{title: this.props.shelf.title, 
                  name: this.props.shelf.name}} />
      </ol>  
    </div>    
  </div>
  )}
}

export default BookShelf

