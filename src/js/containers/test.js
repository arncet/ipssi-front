import React, { Component } from 'react'
import { connect } from 'react-redux'
import { test } from '../actions'

class Test extends Component {
  render () {
    const { testaction } = this.props

    return (
      <div className="Test">
        <button onClick={() => testaction()}>Test</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  testaction: () => dispatch(test()),
})

export default connect(
  null,
  mapDispatchToProps
)(Test)
