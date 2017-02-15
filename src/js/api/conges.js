import {getRandomString} from '../utils/string'

export const createCongesApi = (conges, userId) => {
  return new Promise((resolve, reject) => {
    resolve({...conges, id: getRandomString(), userId})
  })
}

export const editCongesApi = conges => {
  return new Promise((resolve, reject) => {
    resolve(conges)
  })
}

export const deleteCongesApi = congesId => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

export const validCongesApi = (congesId, userId) => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

