import { call, put, select } from 'redux-saga/effects'
import * as actions from '../actions'
import { takeEvery } from 'redux-saga'
import { fetchUrl } from '../api/fetch'

function* flow() {
  yield* takeEvery(actions.USER_LOGIN, userLogin)
}

function* userLogin({ payload }) {
  try {
    yield put(actions.queryStart(OBJECTIF, payload))
    const user = yield call(fetchUrl, 'user')
    if (user.error) yield put(actions.userLoginFailed(user.error))
    else {
      yield put(actions.userLoginSuccess(user))
      yield put(actions.querySuccess(USER, user))
    }
  } catch (err) {
    throw(err)
  }
}


export default flow
