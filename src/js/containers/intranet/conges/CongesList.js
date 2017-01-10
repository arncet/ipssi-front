import { connect } from 'react-redux'
import {CONGES_DELETE_OPEN_MODAL, CONGES_DELETE_CLOSE_MODAL, CONGES_DELETE} from '../../../actions'
import {getConges, getConge, getCongesStatus, getCongesIdToDelete} from '../../../selectors/conges'

import Conges from '../../../components/intranet/conges/Conges'

const mapStateToProps = state => {
  const conges = getConges(state)
  const isLoading = getCongesStatus(state) === 'pending'
  const congesIdToDelete = getCongesIdToDelete(state)
  const congesToDelete = congesIdToDelete ? getConge(state, congesIdToDelete) : null

  return {
    conges,
    isLoading,
    congesToDelete
  }
}

const mapDispatchToProps = dispatch => ({
  deleteConges: () => dispatch({type: CONGES_DELETE}),
  openDeleteCongesModal: congesId => dispatch({type: CONGES_DELETE_OPEN_MODAL, payload: {congesId}}),
  closeDeleteCongesModal: () => dispatch({type: CONGES_DELETE_CLOSE_MODAL})
})

export default connect(mapStateToProps, mapDispatchToProps)(Conges)
