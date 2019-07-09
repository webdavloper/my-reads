import './style.css'
import React from 'react';
import { Link } from 'react-router-dom'


const Book = props => {
  const { book, onChangeShelf: changeShelf } = props
  const { title, shelf, imageLinks: { thumbnail } } = book

  const handleChangeShelf = ({ target: { value: shelf } }) => changeShelf(book, shelf)

  return (
    <li className="book">
      <Link to="/book">
        <img src={thumbnail} alt={title} />
      </Link>
      <div className="select">
        <select onChange={handleChangeShelf} defaultValue={shelf}>
          <option disabled>Select a shelf</option>
          <option value="currentlyReading">Reading</option>
          <option value="wantToRead">I want to read</option>
          <option value="read">Read</option>
        </select>
      </div>
    </li>
  )
}

export default Book