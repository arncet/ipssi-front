import React, {Component} from 'react'
import {connect} from 'react-redux'
import {USERS_FETCH_USERS} from '../../actions'
import {getMe} from '../../selectors/users'
import {getCookie} from '../../utils/cookie'
import { withRouter } from 'react-router/es6'

class QueryAuth extends Component {
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
    if (props.userIsConnected) {
      if (!props.me) props.fetchUsers()
    }
    else props.router.push(props.routeToRedirect || '')
  }
}

const mapStateToProps = state => {
  const userIsConnected = Boolean(getCookie('ippsi-jwt'))
  const me = getMe(state)

  return {
    userIsConnected,
    me
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: userIds => dispatch({type: USERS_FETCH_USERS, payload: userIds})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(QueryAuth))
