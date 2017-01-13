import { connect } from 'react-redux'
import {JOBS_EDIT, JOBS_SET_AVALIABLE} from '../../../actions'
import {getJob, getJobsEditionStatus} from '../../../selectors/jobs'

import JobsForm from '../../../components/intranet/jobs/JobsForm'

const mapStateToProps = (state, {params: {id}}) => {
  const job = getJob(state, id)
  const status = getJobsEditionStatus(state)

  return {job, status}
}

const mapDispatchToProps = dispatch => ({
  editJob: job => dispatch({type: JOBS_EDIT, payload: {job}}),
  setJobAvaliable: (jobId, avaliable) => dispatch({type: JOBS_SET_AVALIABLE, payload: {jobId, avaliable}})
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsForm)
