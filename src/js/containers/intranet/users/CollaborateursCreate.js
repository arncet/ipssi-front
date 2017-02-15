import { connect } from 'react-redux'
import {USERS_CREATE} from '../../../actions'
import {getUsersCreationStatus} from '../../../selectors/users'

import UsersForm from '../../../components/intranet/users/UsersForm'

const mapStateToProps = state => {
  const status = getUsersCreationStatus(state)

  return {status}
}

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch({type: USERS_CREATE, payload: {user}})
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersForm)
