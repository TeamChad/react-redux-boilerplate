import React, { Component } from 'react'
import logo from './logo.svg'

export default class Header extends Component {
  
  render() {
    return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>Welcome to React - Redux</h2>
      </header>
    )
  }
}