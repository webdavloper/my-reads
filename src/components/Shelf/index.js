import './style.css'
import React from 'react'

import Placeholder from '../Placeholder'
import Book from '../Book'

const Shelf = props => {
  const { loading, title, books, books: { length: total }, onChangeShelf } = props

  return (
    <div className="shelf">
      <h3>{title} ({total})</h3>

      {loading === true && <Placeholder />}

      <ul className="book-list">
        {books.map(book =>
          <Book key={book.id} book={book} onChangeShelf={onChangeShelf} />
        )}
      </ul>
    </div>
  )
}

export default Shelf