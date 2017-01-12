import {getRandomString} from '../utils/string'

export const createCRAApi = cra => {
  return new Promise((resolve, reject) => {
    resolve({...cra, id: getRandomString()})
  })
}

export const editCRAApi = cra => {
  return new Promise((resolve, reject) => {
    resolve(cra)
  })
}

export const deleteCRAApi = craId => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

export const validCRAApi = (craId, userId) => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

export const askForEditionCRAApi = (craId, comment) => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}
