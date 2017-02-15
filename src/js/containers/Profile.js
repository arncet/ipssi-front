import {connect} from 'react-redux'
import {USERS_SAVE_PROFILE, USERS_DELETE_ACCOUNT} from '../actions'
import {getMe, getUser, getProfileEditionStatus, getAccoundDeletionStatus} from '../selectors/users'
import {getCVByUserId} from '../selectors/cv'
import {getCRAsByUserId} from '../selectors/cra'
import {getCongesByUserId} from '../selectors/conges'
import {getCandidaturesByUserId} from '../selectors/candidatures'
import {getJob} from '../selectors/jobs'
import {getAllNewsByUserId} from '../selectors/news'

import Profile from '../components/profile/Profile'

const mapStateToProps = (state, {params: {id}}) => {
  const profileEditionStatus = getProfileEditionStatus(state)
  const accoundDeletionStatus = getAccoundDeletionStatus(state)
  const user = id ? getUser(state, id) : getMe(state)
  const cv = user ? getCVByUserId(state, user.id) : null
  const cras = user ? getCRAsByUserId(state, user.id) : null
  const conges = user ? getCongesByUserId(state, user.id) : []
  const candidatures = user ? getCandidaturesByUserId(state, user.id) : []
  const jobs = candidatures.length ? candidatures.map(candidature => getJob(state, candidature.jobId)) : []
  const allNews = user ? getAllNewsByUserId(state, user.id) : []
  const isMyProfile = !id

  return {
    user,
    profileEditionStatus,
    accoundDeletionStatus,
    cv,
    cras,
    conges,
    candidatures,
    jobs,
    allNews,
    isMyProfile
  }
}

const mapDispatchToProps = dispatch => ({
  saveProfile: user => dispatch({type: USERS_SAVE_PROFILE, payload: {user}}),
  deleteAccount: () => dispatch({type: USERS_DELETE_ACCOUNT})
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
