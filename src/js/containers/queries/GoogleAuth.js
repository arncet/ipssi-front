import React, {Component} from 'react'
import {connect} from 'react-redux'
import {GOOGLE_AUTH, GOOGLE_LOAD_GMAIL} from '../../actions'
import {isAuthentified} from '../../selectors/google'

class QueryGoogleAuth extends Component {
  render () {
    return <noscript />
  }

  componentWillMount () {
    this.request(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.request(nextProps)
  }

  request(props) {
    if (!props.authentified) {
      const googleApiScript = document.querySelector('#google-api-script')
      if (googleApiScript) props.auth()
      else {
        window.addEventListener('load', addGoogleAPiScript.bind(this, props.auth))
      }
    } else {
      props.loadGmailApi()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('load', addGoogleAPiScript.bind(this, this.props.auth))
  }
}

const addGoogleAPiScript = callback => {
  const scriptElement = document.createElement('script')
  scriptElement.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback'
  scriptElement.id = 'google-api-script'
  window.onLoadCallback = callback
  document.head.appendChild(scriptElement)
}

const mapStateToProps = state => {
  const authentified = isAuthentified(state)

  return {
    authentified
  }
}

const mapDispatchToProps = dispatch => ({
  auth: () => dispatch({type: GOOGLE_AUTH}),
  loadGmailApi: () => dispatch({type: GOOGLE_LOAD_GMAIL})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryGoogleAuth)
