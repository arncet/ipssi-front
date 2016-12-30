import auth from './auth'
import gmail from './gmail'
import calendar from './calendar'
import { fork } from 'redux-saga/effects'

function* root () {
  yield [
    fork(auth),
    fork(gmail),
    fork(calendar)
  ]
}

export default root
