import { connect } from 'react-redux'
import {getSlides, getHomeSections, getSlidesStatus, getHomeSectionsStatus} from '../selectors/home'
import {getJobs, getJobsStatus} from '../selectors/jobs'

import Home from '../components/home/Home'

const mapStateToProps = (state) => {
  const slides = getSlides(state)
  const slidesStatus = getSlidesStatus(state)
  const sections = getHomeSections(state)
  const sectionStatus = getHomeSectionsStatus(state)
  const jobs = getJobs(state, 6)
  const jobsStatus = getJobsStatus(state)

  return {slides, sections, jobs, slidesStatus, sectionStatus, jobsStatus}
}

export default connect(mapStateToProps, null)(Home)
