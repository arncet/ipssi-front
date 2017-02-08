import { connect } from 'react-redux'
import {getHomeSections, getHomeSectionsStatus} from '../selectors/home'
import {getJobs, getJobsStatus} from '../selectors/jobs'
import {getAllNews, getNewsStatus} from '../selectors/news'

import Home from '../components/home/Home'

const mapStateToProps = (state) => {
  const allNews = getAllNews(state)
  const slidesStatus = getNewsStatus(state)
  const sections = getHomeSections(state)
  const sectionStatus = getHomeSectionsStatus(state)
  const jobs = getJobs(state, 6)
  const jobsStatus = getJobsStatus(state)

  return {allNews, sections, jobs, slidesStatus, sectionStatus, jobsStatus}
}

export default connect(mapStateToProps)(Home)
