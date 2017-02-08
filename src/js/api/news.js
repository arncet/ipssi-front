import {getRandomString} from '../utils/string'

export const createNewsApi = news => {
  return new Promise((resolve, reject) => {
    resolve({...news, id: getRandomString()})
  })
}

export const editNewsApi = news => {
  return new Promise((resolve, reject) => {
    resolve(news)
  })
}

export const deleteNewsApi = newsId => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

export const validNewsApi = (newsId, userId) => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

export const askForEditionNewsApi = (newsId, comment) => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

