import {getRandomString} from '../utils/string'

export const createNDFApi = ndf => {
  return new Promise((resolve, reject) => {
    resolve({...ndf, id: getRandomString()})
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


