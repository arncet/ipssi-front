import {apiURL} from './config'
import superagent from './superagent'

export const get = url => (
  superagent.get(`${apiURL}/${url}`)
    .set('Content-type', 'application/json')
    .then(res => res.body)
)

export const post = (url, data) => (
  superagent.post(`${apiURL}/${url}`)
    .send({...data})
    .set('Content-type', 'application/json')
    .then(res => res.body)
)

export const put = (url, data) => (
  superagent.get(`${apiURL}/${url}`)
    .send({...data})
    .set('Content-type', 'application/json')
    .then(res => res.body)
)

export const del = url => (
  superagent.get(`${apiURL}/${url}`)
    .set('Content-type', 'application/json')
    .then(res => res.body)
)

