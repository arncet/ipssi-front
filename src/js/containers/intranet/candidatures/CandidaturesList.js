import { connect } from 'react-redux'
import {CANDIDATURES_DELETE_OPEN_MODAL, CANDIDATURES_DELETE_CLOSE_MODAL, CANDIDATURES_DELETE,
 CANDIDATURES_SET_VALID} from '../../../actions'
import {getCandidatures, getCandidaturesStatus, getCandidatureIdToDelete, getCandidature} from '../../../selectors/candidatures'
import {getJob} from '../../../selectors/jobs'
import {getUser} from '../../../selectors/users'
import {getCV} from '../../../selectors/cv'

import Candidatures from '../../../components/intranet/candidatures/Candidatures'

const mapStateToProps = state => {
  const candidatures = getCandidatures(state)
  const isLoading = getCandidaturesStatus(state) === 'pending'
  const {jobs, users, cvs} = candidatures.length ? candidatures.reduce((prev, candidature) => {
    const job = prev.jobs[candidature.jobId] ? null : getJob(state, candidature.jobId)
    const user = prev.users[candidature.userId] ? null : getUser(state, candidature.userId)
    const cv = prev.cvs[candidature.userId] ? null : getCV(state, candidature.cvId)
    if (job) prev.jobs[job.id] = job
    if (user) prev.users[user.id] = user
    if (cv) prev.cvs[cv.id] = cv
    return prev
  }, {jobs: {}, users: {}, cvs: {}}) : {}
  const candidatureIdToDelete = getCandidatureIdToDelete(state)
  const candidatureToDelete = candidatureIdToDelete ? getCandidature(state, candidatureIdToDelete) : null

  return {
    candidatures,
    jobs,
    users,
    cvs,
    candidatureToDelete,
    isLoading
  }
}

const mapDispatchToProps = dispatch => ({
  deleteCandidature: () => dispatch({type: CANDIDATURES_DELETE}),
  openDeleteCandidaturesModal: candidatureId => dispatch({type: CANDIDATURES_DELETE_OPEN_MODAL, payload: {candidatureId}}),
  closeDeleteCandidaturesModal: () => dispatch({type: CANDIDATURES_DELETE_CLOSE_MODAL}),
  validCandidature: candidatureId => dispatch({type: CANDIDATURES_SET_VALID, payload: {valid: true, candidatureId}}),
  unValidCandidature: candidatureId => dispatch({type: CANDIDATURES_SET_VALID, payload: {valid: false, candidatureId}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Candidatures)
