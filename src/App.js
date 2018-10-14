import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './SearchBook'
import Container from './Container'


class BooksApp extends Component {
  state = {
    books : [],
  }

  componentDidMount() {
    this.retrieveBooks();  
  }

retrieveBooks() {
  BooksAPI.getAll()
  .then(books => this.setState({ books }))
  .catch(() => { alert('Erro ao recuperar lista de livros.'); });
}

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }

  handleBookMove = (selectedBook, updatedShelf) => {
    BooksAPI.update(selectedBook, updatedShelf)
      .then(() => { this.retrieveBooks(); })
      .catch(() => { alert('Something went wrong with your request.'); })
      .then(console.log('Ajustado'));
  };

  render() {
    return (
      <div className="app">
       <Route exact path='/' render={() => (
        <Container 
            books={this.state.books} 
            handleBookMove={this.handleBookMove} />
      )}/>
      <Route exact path='/search' render={() => (
        <SearchBook
            books={this.state.books} 
            handleBookMove={this.handleBookMove} />
      )}/>
      </div>
    )
  }
}

export default BooksApp
