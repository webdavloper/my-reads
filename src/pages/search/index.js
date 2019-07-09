import './style.css'
import React, { Component } from 'react'
import { search } from '../../api/BooksAPI'
import { Search as SearchIcon } from 'react-feather'
import PropTypes from 'prop-types'

import Book from '../../components/Book'

class Search extends Component {

  static propTypes = {
    book: PropTypes.array,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    result: []
  }

  async searchBook({ target: { value: query } }) {
    if (query.length) {
      const result = await search(query)
      const { error } = result

      if (!error)
        this.setState({ result })
    }
  }

  render() {
    const { onChangeShelf: changeShelf } = this.props
    const { result } = this.state
    const { searchBook } = this
    return (
      <div>
        <div className="search-input">
          <SearchIcon />
          <input type="search" onChange={searchBook.bind(this)} placeholder="Search" />
        </div>

        <main>
          <div className="shelf">
            <ul className="book-list">
              {result.map(book => <Book key={book.id} book={book} onChangeShelf={changeShelf} />)}
            </ul>
          </div>
        </main>
      </div>
    )
  }
}

export default Search