import {call, put} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {USERS_CONNEXION, USERS_CONNEXION_SUCCESS, USERS_CONNEXION_FAILED,
 USERS_INSCRIPTION, USERS_INSCRIPTION_SUCCESS, USERS_INSCRIPTION_FAILED,
 USERS_FETCH_USERS, USERS_FETCH_USERS_SUCCESS, USERS_FETCH_USERS_FAILED} from '../actions'
import {userConnexionApi, userInscriptionApi, fetchUsersApi} from '../api/users'

//Connexion
function* userConnexion ({payload: {user}}) {
  try {
    const result = yield call(userConnexionApi, user)
    yield put({type: USERS_CONNEXION_SUCCESS, payload: result})
  } catch(e) {
    yield put({type: USERS_CONNEXION_FAILED})
    console.error('ERROR USERS CONNEXION', e)
  }
}

function* watchUserConnexion () {
  yield* takeEvery(USERS_CONNEXION, userConnexion)
}

//Connexion
function* userInscription ({payload: {user}}) {
  try {
    yield call(userInscriptionApi, user)
    yield put({type: USERS_INSCRIPTION_SUCCESS})
  } catch(e) {
    yield put({type: USERS_INSCRIPTION_FAILED})
    console.error('ERROR USERS INSCIRPION', e)
  }
}

function* watchUserInscription () {
  yield* takeEvery(USERS_INSCRIPTION, userInscription)
}

//Fetch
function* fetchUsers ({payload: {usersId}}) {
  try {
    const users = yield call(fetchUsersApi, usersId)
    yield put({type: USERS_FETCH_USERS_SUCCESS, payload: {users}})
  } catch(e) {
    yield put({type: USERS_FETCH_USERS_FAILED})
    console.error('ERROR USERS FETCH', e)
  }
}

function* watchFetchUsers () {
  yield* takeEvery(USERS_FETCH_USERS, fetchUsers)
}


function* flow () {
  yield [
    watchUserConnexion(),
    watchUserInscription(),
    watchFetchUsers()
  ]
}

export default flow
