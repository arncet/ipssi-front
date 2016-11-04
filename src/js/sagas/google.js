//import { call, put, select } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import {GOOGLE_INIT} from '../actions'

function* googleInit () {
  try {
    yield console.log('u')
  } catch(e) {
    console.log('i')
  }
}

function* watchGoogleInit () {
  yield* takeEvery(GOOGLE_INIT, googleInit)
}

function* flow () {
  yield [
    watchGoogleInit()
  ]
}

export default flow
