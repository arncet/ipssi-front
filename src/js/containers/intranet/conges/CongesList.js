import { connect } from 'react-redux'
import {CONGES_DELETE_OPEN_MODAL, CONGES_DELETE_CLOSE_MODAL, CONGES_DELETE} from '../../../actions'
import {getConges, getConge, getCongesStatus, getCongesIdToDelete} from '../../../selectors/conges'
import {getUser} from '../../../selectors/users'

import Conges from '../../../components/intranet/conges/Conges'

const mapStateToProps = state => {
  const conges = getConges(state)
  const isLoading = getCongesStatus(state) === 'pending'
  const congesIdToDelete = getCongesIdToDelete(state)
  const congesToDelete = congesIdToDelete ? getConge(state, congesIdToDelete) : null
  const users = conges.length ? conges.reduce((prev, conge) => {
    const user = prev[conge.userId] ? null : getUser(state, conge.userId)
    return user ? {...prev, [user.id]: user} : prev
  }, {}) : {}

  return {
    conges,
    isLoading,
    congesToDelete,
    users
  }
}

const mapDispatchToProps = dispatch => ({
  deleteConges: () => dispatch({type: CONGES_DELETE}),
  openDeleteCongesModal: congesId => dispatch({type: CONGES_DELETE_OPEN_MODAL, payload: {congesId}}),
  closeDeleteCongesModal: () => dispatch({type: CONGES_DELETE_CLOSE_MODAL})
})

export default connect(mapStateToProps, mapDispatchToProps)(Conges)
