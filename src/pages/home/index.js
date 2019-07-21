import './styles.css'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Shelf from '../../components/Shelf'

import { Plus } from 'react-feather'

const Home = props => {
  const { loading, books, onChangeShelf } = props

  return (
    <main id="home">
      <Shelf
        loading={loading}
        title="Reading"
        books={books.filter(b => b.shelf === "currentlyReading")}
        onChangeShelf={onChangeShelf}
      />
      <Shelf
        loading={loading}
        title="I want to read"
        books={books.filter(b => b.shelf === "wantToRead")}
        onChangeShelf={onChangeShelf}
      />
      <Shelf
        loading={loading}
        title="Read"
        books={books.filter(b => b.shelf === "read")}
        onChangeShelf={onChangeShelf}
      />

      <Link className="add-book" to="/search">
        <Plus color="#ffffff" />
      </Link>
    </main>
  )
}

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Home