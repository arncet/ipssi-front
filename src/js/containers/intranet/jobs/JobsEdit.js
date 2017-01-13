import { connect } from 'react-redux'
import {JOBS_EDIT} from '../../../actions'
import {getJob, getJobEditionStatus} from '../../../selectors/jobs'

import JobsForm from '../../../components/intranet/jobs/JobsForm'

const mapStateToProps = (state, {params: {id}}) => {
  const job = getJob(state, id)
  const status = getJobEditionStatus(state)

  return {job, status}
}

const mapDispatchToProps = dispatch => ({
  editJob: job => dispatch({type: JOBS_EDIT, payload: {job}})
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsForm)
