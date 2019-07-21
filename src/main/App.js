import './App.css'
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { update, getAll } from '../api/BooksAPI'
import Header from '../components/Header'
import Toast from '../components/Toast'
import Home from '../pages/home'
import Search from '../pages/search'

class App extends Component {

  state = {
    books: [],
    toastMsg: '',
    loading: true
  }

  changeShelf = (book, shelf) => {
    let { books } = this.state
    book.shelf = shelf
    books = [...books.filter(b => b.id !== book.id), book]

    this.setState({ books, link: shelf })

    switch (shelf) {
      case 'currentlyReading':
        this.setState({ toastMsg: `Book moved to Reading` })
        break;
      case 'read':
        this.setState({ toastMsg: `Book moved to Read` })
        break;
      case 'wantToRead':
        this.setState({ toastMsg: `Book moved to I want to read` })
        break;
      default:
        this.setState({ toastMsg: 'Book removed from shelf' })
        break;
    }

    setTimeout(() => this.setState({ toastMsg: '' }), 3000)

    update(book, shelf)
  }

  async componentDidMount() {
    const books = await getAll()
    this.setState({ books, loading: false })
  }

  render() {
    const { books, loading, toastMsg } = this.state
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
          <Toast active={!!toastMsg} text={toastMsg} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
