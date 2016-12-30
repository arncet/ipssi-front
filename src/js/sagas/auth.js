import {call, put} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {GOOGLE_AUTH, GOOGLE_AUTH_SUCCESS, GOOGLE_AUTH_FAILED} from '../actions'
import {googleAuthApi} from '../api/google'

//Auth
function* googleAuth () {
  try {
    yield call(googleAuthApi)
    yield put({type: GOOGLE_AUTH_SUCCESS})
  } catch(e) {
    yield put({type: GOOGLE_AUTH_FAILED})
    console.error('ERROR GOOGLE AUTH EMAIL', e)
  }
}

function* watchGoogleAuth () {
  yield* takeEvery(GOOGLE_AUTH, googleAuth)
}

function* flow () {
  yield [
    watchGoogleAuth()
  ]
}

export default flow
