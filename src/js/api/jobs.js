import {getRandomString} from '../utils/string'

export const createJobApi = job => {
  return new Promise((resolve, reject) => {
    resolve({...job, id: getRandomString()})
  })
}

export const editJobApi = job => {
  return new Promise((resolve, reject) => {
    resolve(job)
  })
}

export const deleteJobApi = jobId => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

export const setJobAvaliableApi = jobId => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

