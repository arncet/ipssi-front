import { connect } from 'react-redux'
import {JOBS_VALID} from '../../../actions'
import {getJob, getJobsAvaliableStatus} from '../../../selectors/jobs'

import JobsForm from '../../../components/intranet/jobs/JobsForm'

const mapStateToProps = (state, {params: {id}}) => {
  const job = getJob(state, id)
  const avaliableStatus = getJobsAvaliableStatus(state)

  return {job, avaliableStatus, inputsDisabled: true}
}

const mapDispatchToProps = dispatch => ({
  validJobs: jobId => dispatch({type: JOBS_VALID, payload: {jobId}})
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsForm)
