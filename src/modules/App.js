import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './App.css'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import Footer from '../components/Footer'
import * as appActions from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.actions.appReady()
  }

  render() {
    return (
      <div className="app">
        <Header />
        <MainSection />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ready: state.ready
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
