import React, {Component} from 'react'
import {connect} from 'react-redux'
import {GOOGLE_FETCH_EMAILS, GOOGLE_LOAD_GMAIL} from '../../actions'
import {isAuthentified} from '../../selectors/auth'
import {gmailApiIsLoaded} from '../../selectors/gmail'

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
    if (props.authentified) {
      if (props.gmailLoaded) props.fetchEmails()
      else props.loadGmailApi()
    }
  }
}

const mapStateToProps = state => {
  const gmailLoaded = gmailApiIsLoaded(state)
  const authentified = isAuthentified(state)

  return {
    gmailLoaded,
    authentified
  }
}

const mapDispatchToProps = dispatch => ({
  fetchEmails: () => dispatch({type: GOOGLE_FETCH_EMAILS}),
  loadGmailApi: () => dispatch({type: GOOGLE_LOAD_GMAIL})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryGmail)
