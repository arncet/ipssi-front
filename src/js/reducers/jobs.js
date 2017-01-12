import {JOBS_FETCH_JOBS, JOBS_FETCH_JOBS_SUCCESS, JOBS_FETCH_JOBS_FAILED} from '../actions'

const initialState = {
  jobs: {
    1: { id: 1, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 },
    2: { id: 2, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 },
    3: { id: 3, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 },
    4: { id: 4, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 },
    5: { id: 4, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 },
    6: { id: 6, title: 'Lorem ipsum Esse', description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.', date: 1472215201483 }
  },
  jobsStatus: ''
}

export default function jobs (state = initialState, {type, payload}) {
  switch (type) {
    case JOBS_FETCH_JOBS:
      return {
        ...state,
        jobsStatus: 'pending'
      }
    case JOBS_FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs: payload.jobs.reduce((prev, job) => {
          return {...prev, [job.id]: job}
        }, {}),
        jobsStatus: ''
      }
    case JOBS_FETCH_JOBS_FAILED:
      return {
        ...state,
        jobsStatus: 'failed'
      }
    default:
      return state
  }
}
