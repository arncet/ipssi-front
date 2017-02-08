import {fork} from 'redux-saga/effects'

import auth from './auth'
import gmail from './gmail'
import calendar from './calendar'
import cra from './cra'
import conges from './conges'
import users from './users'
import cv from './cv'
import jobs from './jobs'
import news from './news'

function* root () {
  yield [
    fork(auth),
    fork(gmail),
    fork(calendar),
    fork(cra),
    fork(conges),
    fork(users),
    fork(cv),
    fork(jobs),
    fork(news)
  ]
}

export default root
