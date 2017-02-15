import { connect } from 'react-redux'
import {NDF_DELETE_OPEN_MODAL, NDF_DELETE_CLOSE_MODAL, NDF_DELETE} from '../../../actions'
import {getNDFs, getNDF, getNDFStatus, getNDFIdToDelete} from '../../../selectors/ndf'
import {getUser} from '../../../selectors/users'

import NDF from '../../../components/intranet/ndf/NDF'

const mapStateToProps = state => {
  const ndfs = getNDFs(state)
  const isLoading = getNDFStatus(state) === 'pending'
  const ndfIdToDelete = getNDFIdToDelete(state)
  const ndfToDelete = ndfIdToDelete ? getNDF(state, ndfIdToDelete) : null
  const users = ndfs.length ? ndfs.reduce((prev, ndf) => {
    const user = prev[ndf.userId] ? null : getUser(state, ndf.userId)
    return user ? {...prev, [user.id]: user} : prev
  }, {}) : {}

  return {
    ndfs,
    isLoading,
    users,
    ndfToDelete
  }
}

const mapDispatchToProps = dispatch => ({
  deleteNDF: () => dispatch({type: NDF_DELETE}),
  openDeleteNDFModal: ndfId => dispatch({type: NDF_DELETE_OPEN_MODAL, payload: {ndfId}}),
  closeDeleteNDFModal: () => dispatch({type: NDF_DELETE_CLOSE_MODAL})
})

export default connect(mapStateToProps, mapDispatchToProps)(NDF)
