import {getRandomString} from '../utils/string'

export const createCandidatureApi = (candidature, userId) => {
  return new Promise((resolve, reject) => {
    resolve({...candidature, id: getRandomString(), userId})
  })
}

export const editCandidatureApi = candidature => {
  return new Promise((resolve, reject) => {
    resolve(candidature)
  })
}

export const deleteCandidatureApi = candidatureId => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

export const setCandidatureValidApi = candidatureId => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

