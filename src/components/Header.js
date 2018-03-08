import React, { Component } from 'react'

import logo from './assets/logo.png'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="api-reference">
          Using
          <a href="https://rickandmortyapi.com/" target="blank"> The Rick and Morty API </a>
          by
          <a href="https://axelfuhrmann.com/" target="blank"> Axel Fuhrmann.</a>
        </div>
        <img src={logo} alt="Rick and Morty" />
        <div className="header-bar">
          <h2>
            Character list
          </h2>
          <h4>
            Total: {this.props.count}
          </h4>
        </div>
      </div>
    )
  }
}
