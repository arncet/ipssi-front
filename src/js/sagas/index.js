import {fork} from 'redux-saga/effects'

import auth from './auth'
import gmail from './gmail'
import calendar from './calendar'
import cra from './cra'

function* root () {
  yield [
    fork(auth),
    fork(gmail),
    fork(calendar),
    fork(cra)
  ]
}

export default root
