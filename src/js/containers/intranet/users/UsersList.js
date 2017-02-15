import { connect } from 'react-redux'
import {USERS_DELETE_OPEN_MODAL, USERS_DELETE_CLOSE_MODAL, USERS_DELETE} from '../../../actions'
import {getUsers, getUser, getUsersStatus, getUserIdToDelete} from '../../../selectors/users'

import Users from '../../../components/intranet/users/Users'

const mapStateToProps = state => {
  const users = getUsers(state)
  const isLoading = getUsersStatus(state) === 'pending'
  const userIdToDelete = getUserIdToDelete(state)
  const userToDelete = userIdToDelete ? getUser(state, userIdToDelete) : null

  return {
    users,
    isLoading,
    userToDelete
  }
}

const mapDispatchToProps = dispatch => ({
  deleteUser: () => dispatch({type: USERS_DELETE}),
  openDeleteUserModal: userId => dispatch({type: USERS_DELETE_OPEN_MODAL, payload: {userId}}),
  closeDeleteUserModal: () => dispatch({type: USERS_DELETE_CLOSE_MODAL})
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
