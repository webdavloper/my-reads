import './App.css'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { update, getAll } from '../api/BooksAPI'
import Header from '../components/Header'
import Home from '../pages/home'
import Search from '../pages/search'

class App extends Component {

  state = {
    books: [],
    loading: true
  }

  changeShelf = (book, shelf, callback) => {
    let { books } = this.state
    book.shelf = shelf
    books = [...books.filter(b => b.id !== book.id), book]

    this.setState({ books })

    update(book, shelf)
  }

  async componentDidMount() {
    const books = await getAll()
    this.setState({ books, loading: false })
  }

  render() {
    const { books, loading } = this.state
    const { changeShelf } = this
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" render={() => (
              <Home
                books={books}
                loading={loading}
                onChangeShelf={changeShelf}
              />
            )} />
            <Route path="/search" render={() =>
              <Search
              onChangeShelf={changeShelf}
              title="Type something to see results 🚀"
              />
            }
            />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
