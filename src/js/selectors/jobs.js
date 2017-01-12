export const getJobs = (state, size = 0) => Object.values(state.jobs.jobs).slice(0, size)
export const getJobsStatus = state => state.jobs.jobsStatus
