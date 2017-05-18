import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import WideLayout from '../layouts/WideLayout'
import './App.css'
import * as appActions from '../actions'

class App extends Component {

  componentDidMount() {
    this.props.actions.appReady()
  }

  render() {
    return (
      <WideLayout>
        <p className="app-intro">
          To get started, edit <code>src/views/App.js</code> and save to reload.
        </p>
      </WideLayout>
    )
  }
}

App.propTypes = {
  appReady: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  appReady: state.appReady
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(appActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
