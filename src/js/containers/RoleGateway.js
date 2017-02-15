import {connect} from 'react-redux'
import {getMe} from '../selectors/users'

import Avatar from '../components/Avatar'

const mapStateToProps = (state, {roles, anonymous = false}) => {
  const me = getMe(state)
  const pass = me
    ? roles.includes(me.role)
    : anonymous ? true : false

  return {pass}
}

export default connect(mapStateToProps)(Avatar)
