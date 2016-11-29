import React, {Component} from 'react'
import {connect} from 'react-redux'
import {GOOGLE_FETCH_EMAILS} from '../../actions'
import {isAuthentified, gmailApiIsLoaded} from '../../selectors/google'

class QueryGmail extends Component {
  render () {
    return <noscript/>
  }

  componentWillMount () {
    this.request(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.request(nextProps)
  }

  request(props) {
    if (props.gmailLoaded) props.fetchEmails()
  }
}

const mapStateToProps = state => {
  const gmailLoaded = gmailApiIsLoaded(state)

  return {
    gmailLoaded
  }
}

const mapDispatchToProps = dispatch => ({
  fetchEmails: () => dispatch({type: GOOGLE_FETCH_EMAILS})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryGmail)
