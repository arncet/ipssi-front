import {JOBS_FETCH_JOBS, JOBS_FETCH_JOBS_SUCCESS, JOBS_FETCH_JOBS_FAILED,
 JOBS_LOAD, JOBS_LOAD_SUCCESS, JOBS_LOAD_FAILED,
 JOBS_CREATE, JOBS_CREATE_SUCCESS, JOBS_CREATE_FAILED,
 JOBS_EDIT, JOBS_EDIT_SUCCESS, JOBS_EDIT_FAILED,
 JOBS_DELETE, JOBS_DELETE_SUCCESS, JOBS_DELETE_FAILED,
 JOBS_SET_AVALIABLE, JOBS_SET_AVALIABLE_SUCCESS, JOBS_SET_AVALIABLE_FAILED,
 JOBS_CLEAN_STATUS, JOBS_DELETE_OPEN_MODAL, JOBS_DELETE_CLOSE_MODAL} from '../actions'

const initialState = {
  jobs: {
    1: {
      id: 1,
      title: 'Lorem ipsum Esse',
      description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.',
      date: 1472215201483
    },
    2: {
      id: 2,
      title: 'Lorem ipsum Esse',
      description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.',
      date: 1472215201483
    },
    3: {
      id: 3,
      title: 'Lorem ipsum Esse',
      description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.',
      date: 1472215201483
    },
    4: {
      id: 4,
      title: 'Lorem ipsum Esse',
      description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.',
      date: 1472215201483
    },
    5: {
      id: 4,
      title: 'Lorem ipsum Esse',
      description: 'Lorem ipsum Ut fugiat exercitation veniam elit Ut deserunt nostrud anim Excepteur ut exercitation occaecat in proident exercitation nisi ea Excepteur deserunt deserunt ullamco sed tempor dolore sed Ut proident Ut consectetur eiusmod aute magna labore elit irure incididunt.',
      date: 1472215201483
    }
  },
  jobsStatus: '',
  jobAvaliableStatus: '',
  creationStatus: '',
  editionStatus: ''
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
    case JOBS_LOAD:
      return {
        ...state,
        status: 'pending'
      }
    case JOBS_LOAD_SUCCESS:
      return {
        ...state,
        jobs: payload.jobs.reduce((prev, job) => {
          return {...prev, [job.id]: job}
        }, {}),
        status: ''
      }
    case JOBS_LOAD_FAILED:
      return {
        ...state,
        status: 'error'
      }
    case JOBS_CREATE:
      return {
        ...state,
        creatationStatus: 'pending'
      }
    case JOBS_CREATE_SUCCESS:
      return {
        ...state,
        creatationStatus: 'success',
        jobs: {
          ...state.jobs,
          [payload.job.id]: payload.job
        }
      }
    case JOBS_CREATE_FAILED:
      return {
        ...state,
        creatationStatus: 'failed'
      }
    case JOBS_EDIT:
      return {
        ...state,
        editionStatus: 'pending'
      }
    case JOBS_EDIT_SUCCESS:
      return {
        ...state,
        editionStatus: 'success',
        jobs: {
          ...state.jobs,
          [payload.job.id]: payload.job
        }
      }
    case JOBS_EDIT_FAILED:
      return {
        ...state,
        editionStatus: 'failed'
      }
    case JOBS_DELETE:
      return {
        ...state,
        deletionStatus: 'pending'
      }
    case JOBS_DELETE_SUCCESS: {
      const jobs = Object.values(state.jobs).reduce((prev, job) => {
        return job.id === payload.jobId ? prev : {...prev, [job.id]: job}
      }, {})
      return {
        ...state,
        deletionStatus: 'success',
        jobs,
        jobIdToDelete: null
      }
    }
    case JOBS_DELETE_FAILED:
      return {
        ...state,
        deletionStatus: 'failed'
      }
    case JOBS_DELETE_OPEN_MODAL:
      return {
        ...state,
        jobIdToDelete: payload.jobId
      }
    case JOBS_DELETE_CLOSE_MODAL:
      return {
        ...state,
        jobIdToDelete: null
      }
    case JOBS_SET_AVALIABLE:
      return {
        ...state,
        jobAvaliableStatus: 'pending'
      }
    case JOBS_SET_AVALIABLE_SUCCESS:
      return {
        ...state,
        jobAvaliableStatus: 'success'
      }
    case JOBS_SET_AVALIABLE_FAILED:
      return {
        ...state,
        jobAvaliableStatus: 'failed'
      }
    case JOBS_CLEAN_STATUS: {
      return {
        ...state,
        creatationStatus: '',
        editionStatus: '',
        deletionStatus: '',
        validStatus: ''
      }
    }
    default:
      return state
  }
}
