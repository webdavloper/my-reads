import './style.css'
import React from 'react'
import PropTypes from 'prop-types'

const Toast = props =>
  <div className={`toast ${props.active ? 'show' : null}`}>
    {props.text}
  </div>

Toast.propTypes = {
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Toast