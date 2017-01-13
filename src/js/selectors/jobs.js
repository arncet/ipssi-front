export const getJobs = (state, size = 0) => Object.values(state.jobs.jobs).slice(0, size)
export const getJobsStatus = state => state.jobs.jobsStatus
export const getJob = (state, id) => state.job.jobs[id]
export const getJobsCreationStatus = state => state.job.creationStatus
export const getJobsEditionStatus = state => state.job.editionStatus
export const getJobsDeletionStatus = state => state.jobs.deletionStatus
export const getJobsIdToDelete = state => state.job.jobIdToDelete
export const getJobsAvaliableStatus = state => state.job.jobAvaliableStatus
