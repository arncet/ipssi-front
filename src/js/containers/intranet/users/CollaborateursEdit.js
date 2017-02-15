import { connect } from 'react-redux'
import {USERS_EDIT} from '../../../actions'
import {getUser, getUsersEditionStatus} from '../../../selectors/users'

import UsersForm from '../../../components/intranet/users/UsersForm'

const mapStateToProps = (state, {params: {id}}) => {
  const user = getUser(state, id)
  const status = getUsersEditionStatus(state)

  return {user, status}
}

const mapDispatchToProps = dispatch => ({
  editUser: user => dispatch({type: USERS_EDIT, payload: {user}})
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersForm)
