import { connect } from 'react-redux'
import {JOBS_DELETE_OPEN_MODAL, JOBS_DELETE_CLOSE_MODAL, JOBS_DELETE} from '../../../actions'
import {getJob, getJobs, getJobsStatus, getJobsIdToDelete} from '../../../selectors/jobs'

import Jobs from '../../../components/intranet/jobs/Jobs'

const mapStateToProps = state => {
  const jobs = getJobs(state)
  const isLoading = getJobsStatus(state) === 'pending'
  const jobIdToDelete = getJobsIdToDelete(state)
  const jobToDelete = jobIdToDelete ? getJob(state, jobIdToDelete) : null

  return {
    jobs,
    isLoading,
    jobToDelete
  }
}

const mapDispatchToProps = dispatch => ({
  deleteJobs: () => dispatch({type: JOBS_DELETE}),
  openDeleteJobsModal: jobId => dispatch({type: JOBS_DELETE_OPEN_MODAL, payload: {jobId}}),
  closeDeleteJobsModal: () => dispatch({type: JOBS_DELETE_CLOSE_MODAL})
})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
