import React from 'react'

//Components
import Header from './Header'
import JobsList from './JobsList'

const Jobs = ({jobs, openDeleteJobsModal, closeDeleteJobsModal, jobToDelete, deleteJobs}) => (
  <div className='Intranet_page Intranet_page_Jobs'>
    <Header/>
    <JobsList
      jobs={jobs}
      openDeleteJobsModal={openDeleteJobsModal}
      closeDeleteJobsModal={closeDeleteJobsModal}
      jobToDelete={jobToDelete}
      deleteJobs={deleteJobs}
    />
  </div>
)

export default Jobs
