import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { debounce } from 'throttle-debounce';
import BookResults from './BookResults'
import PropTypes from 'prop-types'

class SearchBook extends Component {

  state = {
    results: [],
    query: ''
  };

  constructor() {
    super();
    this.performSearch = debounce(300, false, this.performSearch);
  }
  
  handleQueryChange(event) {
    const query = event.target.value;
    this.setState({ query });

    this.performSearch(query);
  }

  performSearch(query) {
    if (query === '' || query === undefined){
      this.setState({ results: [] });
      return;
    }

    BooksAPI.search(query).then((books) => {
      if (books.constructor === Array) {
        this.setState({ results: books });
      } else {
        this.setState({ results: [] });
      }
    });
  }
    render() {
      let message;

      if (this.state.query === '') {
        message = (
          <h2 style={{ textAlign: 'center' }}>
            Escreva uma ou mais palavras-chave para iniciar a busca.
          </h2>
        );
      } else if (this.state.results.length === 0) {
        message = (
          <h2 style={{ textAlign: 'center' }}>
            Não encontrou resultados. Tente palavras-chave diferetes.
          </h2>
        );
      }
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Procure por título ou autor."
                value={this.state.query}
                onChange={event => this.handleQueryChange(event)}
              />
            </div>
          </div>
          <div className="search-books-results">
            {message}
  
            <ol className="books-grid">
            {this.state.results.length > 0 &&
               <BookResults
                    books={this.state.results}
                    handleBookMove={this.props.handleBookMove}
                />
              }
            </ol>
          </div>
        </div>
      );
    }
  }
  
  SearchBook.propTypes = {
    books: PropTypes.array.isRequired,
    handleBookMove: PropTypes.func.isRequired
  };

export default SearchBook