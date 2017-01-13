export const getJobs = (state, size) => size ? Object.values(state.jobs.jobs).slice(0, size) : Object.values(state.jobs.jobs)
export const getJobsStatus = state => state.jobs.jobsStatus
export const getJob = (state, id) => state.jobs.jobs[id]
export const getJobsCreationStatus = state => state.jobs.creationStatus
export const getJobsEditionStatus = state => state.jobs.editionStatus
export const getJobsDeletionStatus = state => state.jobs.deletionStatus
export const getJobIdToDelete = state => state.jobs.jobIdToDelete
export const getJobsAvaliableStatus = state => state.jobs.jobAvaliableStatus
