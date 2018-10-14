import React, { Component } from 'react'
import ShelvesTitle from './ShelvesTitle'
import BookShelf from './BookShelf'
import SearchButton from './SearchButton'

class Container extends Component {
  state = {
    books : [],
  }
  render() {
         const books = this.props.books
        console.log("Books", books)
        return (
            <div className="list-books">
            <ShelvesTitle />
  
              <div className="list-books-content">
                <div>
                  <BookShelf 
                      books={this.props.books}
                      handleBookMove={this.props.handleBookMove}
                      shelf={{title: "Currently Reading",
                              name: 'currentlyReading'}} />;
                  <BookShelf 
                      books={this.props.books}
                      handleBookMove={this.props.handleBookMove}
                      shelf={{title: "Want To Read",
                      name: 'wantToRead'}} />
                 <BookShelf 
                      books={this.props.books}
                      handleBookMove={this.props.handleBookMove}
                      shelf={{title: "Read",
                      name: 'read'}} />
                </div>
              </div>
              <SearchButton />
            </div>
        )
    }
}

export default Container
