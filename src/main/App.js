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

  changeShelf = (book, shelf) => {
    let { books } = this.state

    try {
      book.shelf = shelf
      books = [...books.filter(b => b.id !== book.id), book]

      this.setState({ books })

      update(book, shelf)
    } catch (err) {
      console.log(err)
    }
  }

  async componentDidMount() {
    const books = await getAll()
    this.setState({ books, loading: false })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" render={() => (
              <Home
                books={this.state.books}
                loading={this.state.loading}
                onChangeShelf={this.changeShelf}
              />
            )} />
            <Route path="/search" render={() =>
              <Search onChangeShelf={this.changeShelf} />
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
