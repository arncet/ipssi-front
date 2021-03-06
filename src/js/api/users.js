import {getRandomString} from '../utils/string'
import {post} from '../api/request'

export const getTokenApi = user => post('user_token', {auth: user})

export const userConnexionApi = user => {
  return new Promise((resolve, reject) => {
    resolve({user: {...user, id: getRandomString()}, token: getRandomString()})
  })
}

export const userInscriptionApi = user => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

export const fetchUsersApi = usersId => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}

export const createUserApi = user => {
  return new Promise((resolve, reject) => {
    resolve({...user, id: getRandomString()})
  })
}

export const editUserApi = user => {
  return new Promise((resolve, reject) => {
    resolve(user)
  })
}

export const deleteUserApi = userId => {
  return new Promise((resolve, reject) => {
    resolve()
  })
}


