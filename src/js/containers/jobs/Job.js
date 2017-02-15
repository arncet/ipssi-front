import {connect} from 'react-redux'
import {JOBS_POSTULATE, AVATAR_OPEN_CONNEXION_MODAL} from '../../actions'
import {getJob} from '../../selectors/jobs'
import {getHasAlreadyPostulate} from '../../selectors/candidatures'
import {getMe} from '../../selectors/users'

import Job from '../../components/jobs/Job'

const mapStateToProps = (state, {params: {id}}) => {
  const job = getJob(state, id)
  const me = getMe(state)
  const hasAlreadyPostulate = me ? getHasAlreadyPostulate(state, job.id, me.id) : false

  return {
    job,
    hasAlreadyPostulate,
    me
  }
}

const mapDispatchToProps = dispatch => ({
  postulate: () => dispatch({type: JOBS_POSTULATE}),
  openConnexionModal: () => dispatch({type: AVATAR_OPEN_CONNEXION_MODAL})
})

export default connect(mapStateToProps, mapDispatchToProps)(Job)
