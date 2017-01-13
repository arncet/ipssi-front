import { connect } from 'react-redux'
import {JOBS_CREATE} from '../../../actions'
import {getJobsCreationStatus} from '../../../selectors/jobs'

import JobsForm from '../../../components/intranet/jobs/JobsForm'

const mapStateToProps = state => {
  const status = getJobsCreationStatus(state)

  return {status}
}

const mapDispatchToProps = dispatch => ({
  createJob: job => dispatch({type: JOBS_CREATE, payload: {job}})
})

export default connect(mapStateToProps, mapDispatchToProps)(JobsForm)
