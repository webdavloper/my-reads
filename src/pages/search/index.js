import './style.css'
import React, { Component } from 'react'
import { search } from '../../api/BooksAPI'
import { Search as SearchIcon } from 'react-feather'
import PropTypes from 'prop-types'

import Book from '../../components/Book'

class Search extends Component {

  static propTypes = {
    books: PropTypes.array,
    onChangeShelf: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  }

  state = {
    // books: this.props.books,
    title: this.props.title,
    query: '',
    result: []
  }

  handleResult = (book, shelf) => {
    const { result } = this.state

    this.setState({ result: result.filter(b => b.id !== book.id) })
    this.props.onChangeShelf(book, shelf)
  }

  searchBook = async ({ target: { value: query } }) => {
    try {
      if (query.length) {
        const result = await search(query)
        const { error } = result

        if (!error) {
          this.setState((state, props) => ({
            result,
            query,
            title: `Showing results for `
          }))
        } else {
          this.setState((state, props) => ({
            result: [],
            query: '',
            title: 'No books found. 🙁'
          }))
        }
      } else {
        this.setState((state, props) => ({
          result: [],
          query: '',
          title: props.title
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { result, query, title } = this.state
    const { searchBook } = this
    return (
      <div>
        <div className="search-input">
          <SearchIcon />
          <input type="search" onChange={searchBook} placeholder="Search" />
        </div>

        <main id="#search">
          <div className="result-message">
            <p>{title} {query && <span>{query}</span>}</p>
          </div>

          <div className="shelf">
            <ul className="book-list">
              {!!result.length && result.map(book => (
                <Book key={book.id} book={book} onChangeShelf={this.handleResult} />
              ))}
            </ul>
          </div>
        </main>
      </div>
    )
  }
}

export default Search