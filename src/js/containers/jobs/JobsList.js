import {connect} from 'react-redux'
import {getJobs} from '../../selectors/jobs'

import JobList from '../../components/jobs/JobList'

const mapStateToProps = (state) => {
  const jobs = getJobs(state)

  return {
    jobs,
  }
}

export default connect(mapStateToProps)(JobList)
