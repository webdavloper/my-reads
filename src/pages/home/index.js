import './styles.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Shelf from '../../components/Shelf'

import { Plus } from 'react-feather'

class Home extends Component {

  render() {

    const { loading, books, onChangeShelf } = this.props

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
}

export default Home