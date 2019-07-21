import './style.css'
import React from 'react'
import PropTypes from 'prop-types'

import Placeholder from '../Placeholder'
import Book from '../Book'

const Shelf = props => {
  const { loading, title, books, books: { length: total }, onChangeShelf } = props

  return (
    <div className="shelf">
      <h3>{title} ({total})</h3>

      {loading && <Placeholder />}

      <ul className="book-list">
        {books.map(book =>
          <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
        ).reverse()}
      </ul>
    </div>
  )
}

Shelf.propTypes = {
  loading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Shelf