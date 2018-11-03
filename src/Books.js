import React, { Component } from 'react'
import BookChanger from './BookChanger'
import * as BooksAPI from './BooksAPI'
class Books extends Component {

  checkState(shelfName) {
    if (shelfName != "") {
        let shelfBooks = this.props.books.filter(book => book.shelf === this.props.shelf.name)
        return shelfBooks;
    } else {
        return this.props.books;
    }
  }  
  
  checkThumbs(book) {
    if (book.imageLinks && book.imageLinks.thumbnail) {
        return 'url('+book.imageLinks.thumbnail+')'
    } else {
        return null
    }
  }

  render() {
    const shelfBooks = this.checkState(this.props.shelf.name)
    //this.props.books.filter(book => book.shelf === this.props.shelf.name)

    return (
        
        <ol className="books-grid">
        { shelfBooks.map((book) => (
            <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                        width: 128, 
                        height: 193,
                        backgroundImage: this.checkThumbs(book)
                        }}>
                    </div>
                    <BookChanger
                        book = {book} 
                        books={this.props.books} 
                        handleBookMove={this.props.handleBookMove}/>   
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.author }</div>
            </div>
        </li>

        ))}
        
        </ol>
    )
  }  
}

export default Books