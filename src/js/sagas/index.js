import google from './google'
import { fork } from 'redux-saga/effects'

function* root () {
  yield fork(google)
}

export default root
