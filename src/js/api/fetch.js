import { apiURL } from './config'
import request from './request'

export const fetchUrl = url => (
  request.get(`${apiURL}/${url}`)
    .then(res => res.body)
)
