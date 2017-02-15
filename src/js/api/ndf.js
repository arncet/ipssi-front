import {getRandomString} from '../utils/string'

export const createNDFApi = (ndf, userId) => {
  return new Promise((resolve, reject) => {
    resolve({...ndf, id: getRandomString(), userId})
  })
}

export const editNDFApi = ndf => {
  return new Promise((resolve, reject) => {
    resolve(ndf)
  })
}

export const deleteNDFApi = ndfId => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}


