import {getRandomString} from '../utils/string'

export const createNewsApi = (news, userId) => {
  return new Promise((resolve, reject) => {
    resolve({...news, id: getRandomString(), userId})
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

export const setNewsVisibleApi = (newsId, visible) => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

