import { connect } from 'react-redux'
import {CV_DELETE_OPEN_MODAL, CV_DELETE_CLOSE_MODAL, CV_DELETE} from '../../../actions'
import {getCVs, getCV, getCVStatus, getCVIdToDelete} from '../../../selectors/cv'

import CV from '../../../components/intranet/cv/CV'

const mapStateToProps = state => {
  const cvs = getCVs(state)
  const isLoading = getCVStatus(state) === 'pending'
  const cvIdToDelete = getCVIdToDelete(state)
  const cvToDelete = cvIdToDelete ? getCV(state, cvIdToDelete) : null

  return {
    cvs,
    isLoading,
    cvToDelete
  }
}

const mapDispatchToProps = dispatch => ({
  deleteCV: () => dispatch({type: CV_DELETE}),
  openDeleteCVModal: cvId => dispatch({type: CV_DELETE_OPEN_MODAL, payload: {cvId}}),
  closeDeleteCVModal: () => dispatch({type: CV_DELETE_CLOSE_MODAL})
})

export default connect(mapStateToProps, mapDispatchToProps)(CV)
