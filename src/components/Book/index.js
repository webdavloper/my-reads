import './style.css'
import React from 'react'
import PropTypes from 'prop-types'

const Book = props => {
  const { book, onChangeShelf: changeShelf } = props
  const { title, shelf, previewLink, imageLinks, maturityRating, authors } = book

  const handleChangeShelf = ({ target: { value: shelf } }) => changeShelf(book, shelf)

  return (
    <li className="book">
      <div className="book__cover">
        <a href={previewLink} rel="noopener noreferrer" target="_blank">
          <img src={imageLinks ? imageLinks.thumbnail : ''} alt={title} />
          {maturityRating === "MATURE" && <small className="book__maturity-rating">+17</small>}
        </a>
        <div className="book__options">
          <select onChange={handleChangeShelf} defaultValue={shelf || 'none'}>
            <option disabled>Select a shelf</option>
            <option value="currentlyReading">Reading</option>
            <option value="wantToRead">I want to read</option>
            <option value="read">Read</option>
            <option value="none">{`${!shelf ? 'None' : 'Remove'}`}</option>
          </select>
        </div>
      </div>
      <ul className="book__authors">
        <small>author{authors && authors.length > 1 ? 's' : ''}</small>
        {!authors ? <li>Unknown</li> : authors.map((author, index) => <li key={index}>{author}</li>)}
      </ul>
    </li>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Book