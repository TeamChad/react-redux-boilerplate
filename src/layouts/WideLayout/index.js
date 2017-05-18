import React, { Component } from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'

export default class WideLayout extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <main className="app-body">
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  }
}
