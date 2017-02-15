import { connect } from 'react-redux'
import {CV_DELETE_OPEN_MODAL, CV_DELETE_CLOSE_MODAL, CV_DELETE} from '../../../actions'
import {getCVs, getCV, getCVStatus, getCVIdToDelete} from '../../../selectors/cv'
import {getUser} from '../../../selectors/users'

import CV from '../../../components/intranet/cv/CV'

const mapStateToProps = state => {
  const cvs = getCVs(state)
  const isLoading = getCVStatus(state) === 'pending'
  const cvIdToDelete = getCVIdToDelete(state)
  const cvToDelete = cvIdToDelete ? getCV(state, cvIdToDelete) : null
  const users = cvs.length ? cvs.reduce((prev, cv) => {
    const user = prev[cv.userId] ? null : getUser(state, cv.userId)
    return user ? {...prev, [user.id]: user} : prev
  }, {}) : {}

  return {
    cvs,
    isLoading,
    cvToDelete,
    users
  }
}

const mapDispatchToProps = dispatch => ({
  deleteCV: () => dispatch({type: CV_DELETE}),
  openDeleteCVModal: cvId => dispatch({type: CV_DELETE_OPEN_MODAL, payload: {cvId}}),
  closeDeleteCVModal: () => dispatch({type: CV_DELETE_CLOSE_MODAL})
})

export default connect(mapStateToProps, mapDispatchToProps)(CV)
