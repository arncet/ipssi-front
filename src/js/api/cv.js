import {getRandomString} from '../utils/string'

export const createCVApi = (cv, userId) => {
  return new Promise((resolve, reject) => {
    resolve({...cv, id: getRandomString(), userId})
  })
}

export const editCVApi = cv => {
  return new Promise((resolve, reject) => {
    resolve(cv)
  })
}

export const deleteCVApi = cvId => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

export const validCVApi = (cvId, userId) => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

