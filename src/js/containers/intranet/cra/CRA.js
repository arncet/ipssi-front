import { connect } from 'react-redux'
import {CRA_DELETE_OPEN_MODAL, CRA_DELETE_CLOSE_MODAL, CRA_DELETE} from '../../../actions'
import {getCRAs, getCRA, getCRAStatus, getCRAIdToDelete} from '../../../selectors/cra'

import CRA from '../../../components/intranet/cra/CRA'

const mapStateToProps = state => {
  const cras = getCRAs(state)
  const isLoading = getCRAStatus(state) === 'pending'
  const craIdToDelete = getCRAIdToDelete(state)
  const craToDelete = craIdToDelete ? getCRA(state, craIdToDelete) : null

  return {
    cras,
    isLoading,
    craToDelete
  }
}

const mapDispatchToProps = dispatch => ({
  deleteCRA: () => dispatch({type: CRA_DELETE}),
  openDeleteCRAModal: craId => dispatch({type: CRA_DELETE_OPEN_MODAL, payload: {craId}}),
  closeDeleteCRAModal: () => dispatch({type: CRA_DELETE_CLOSE_MODAL})
})

export default connect(mapStateToProps, mapDispatchToProps)(CRA)
