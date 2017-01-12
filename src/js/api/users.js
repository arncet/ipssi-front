import {getRandomString} from '../utils/string'

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

