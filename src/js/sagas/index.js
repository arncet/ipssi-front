import {fork} from 'redux-saga/effects'

import auth from './auth'
import gmail from './gmail'
import calendar from './calendar'
import cra from './cra'
import conges from './conges'

function* root () {
  yield [
    fork(auth),
    fork(gmail),
    fork(calendar),
    fork(cra),
    fork(conges)
  ]
}

export default root
