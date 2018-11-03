import React, { Component } from 'react'
import BookChanger from './BookChanger'

class Books extends Component {
    
    
/*     removeContact = (contact) => {
        this.setState((state) => ({
          contacts: state.contacts.filter((c) => c.id !== contact.id)
        }))
        ContactsAPI.remove(contact)
      } */

  checkState(shelfName) {
    if (shelfName != "") {
        let shelfBooks = this.props.books.filter(book => book.shelf === this.props.shelf.name)
        return shelfBooks;
    } else {
        let shelfBooks = this.props.books;
        return shelfBooks;
    }
  }    
  render() {
    console.log("shelfname", this.props.shelf)
    
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
                        backgroundImage: 'url('+book.imageLinks.thumbnail+')'
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