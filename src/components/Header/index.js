import './styles.css'
import React from 'react';
import { Link } from 'react-router-dom'


export const Header = props =>
  <header className="header">
    <h1 className="logo">
      <Link to="/">My Reads</Link>
    </h1>
  </header>

export default Header