import {getRandomString} from '../utils/string'

export const createCVApi = cv => {
  return new Promise((resolve, reject) => {
    resolve({...cv, id: getRandomString()})
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

