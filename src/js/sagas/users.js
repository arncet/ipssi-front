import {call, put, select} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {USERS_CONNEXION, USERS_CONNEXION_SUCCESS, USERS_CONNEXION_FAILED,
 USERS_INSCRIPTION, USERS_INSCRIPTION_SUCCESS, USERS_INSCRIPTION_FAILED,
 USERS_FETCH_USERS, USERS_FETCH_USERS_SUCCESS, USERS_FETCH_USERS_FAILED,
 USERS_CREATE, USERS_CREATE_SUCCESS, USERS_CREATE_FAILED,
 USERS_EDIT, USERS_EDIT_SUCCESS, USERS_EDIT_FAILED,
 USERS_DELETE, USERS_DELETE_SUCCESS, USERS_DELETE_FAILED,
 USERS_SAVE_PROFILE, USERS_SAVE_PROFILE_SUCCESS, USERS_SAVE_PROFILE_FAILED,
 USERS_DELETE_ACCOUNT, USERS_DELETE_ACCOUNT_SUCCESS, USERS_DELETE_ACCOUNT_FAILED,
 NOTIFICATION_ADD} from '../actions'
import {userConnexionApi, userInscriptionApi, fetchUsersApi, getTokenApi,
 createUserApi, editUserApi, deleteUserApi, } from '../api/users'
import {getUserIdToDelete, getMe} from '../selectors/users'
import {setCookie} from '../utils/cookie'
import {getPath} from '../utils/routes'
import {getRandomString} from '../utils/string'

//Connexion
function* userConnexion ({payload: {user}}) {
  try {
    const {jwt} = yield call(getTokenApi, user)
    //const result = yield call(userConnexionApi, user)
    yield put({type: USERS_CONNEXION_SUCCESS})
    setCookie('ippsi-jwt', jwt, 7)
  } catch(e) {
    yield put({type: USERS_CONNEXION_FAILED})
    console.error('ERROR USERS CONNEXION', e)
  }
}

function* watchUserConnexion () {
  yield* takeEvery(USERS_CONNEXION, userConnexion)
}

//Inscription
function* userInscription ({payload: {user}}) {
  try {
    yield call(userInscriptionApi, user)
    yield put({type: USERS_INSCRIPTION_SUCCESS})
  } catch(e) {
    yield put({type: USERS_INSCRIPTION_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
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

//Create
function* createUser ({payload: {user}}) {
  try {
    const createdUser = yield call(createUserApi, user)
    yield put({type: USERS_CREATE_SUCCESS, payload: {user: createdUser}})
    window.location.href = `#/${getPath('intranet-users-id', {id: createdUser.id})}` //Use history
  } catch(e) {
    yield put({type: USERS_CREATE_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR CREATE USER', e)
  }
}

function* watchCreateUser () {
  yield* takeEvery(USERS_CREATE, createUser)
}

//Edit
function* editUser ({payload: {user}}) {
  try {
    const editedUser = yield call(editUserApi, user)
    yield put({type: USERS_EDIT_SUCCESS, payload: {user: editedUser}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La modification de l'utilisateur a bien été prise en compte.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: USERS_EDIT_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR EDIT USER', e)
  }
}

function* watchEditUser () {
  yield* takeEvery(USERS_EDIT, editUser)
}

//Delete
function* deleteUser () {
  try {
    const state = yield select()
    const userId = getUserIdToDelete(state)
    yield call(deleteUserApi, userId)
    yield put({type: USERS_DELETE_SUCCESS, payload: {userId}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `L'utilisateur a bien été supprimé.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: USERS_DELETE_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR DELETE USER', e)
  }
}

function* watchDeleteUser () {
  yield* takeEvery(USERS_DELETE, deleteUser)
}

//Delete Account
function* deleteAccount () {
  try {
    const state = yield select()
    const me = getMe(state)
    yield call(deleteUserApi, me.id)
    yield put({type: USERS_DELETE_ACCOUNT_SUCCESS})
  } catch(e) {
    yield put({type: USERS_DELETE_ACCOUNT_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR DELETE ACCOUNT', e)
  }
}

function* watchDeleteAccount () {
  yield* takeEvery(USERS_DELETE_ACCOUNT, deleteAccount)
}

//Save Profile
function* saveProfile ({payload: {user}}) {
  try {
    const state = yield select()
    const me = getMe(state)
    yield call(editUserApi, me.id)
    yield put({type: USERS_SAVE_PROFILE_SUCCESS, payload: {userId: me.id, user}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La modification de de votre profile a bien été prise en compte.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: USERS_SAVE_PROFILE_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR SAVE PROIFILE', e)
  }
}

function* watchSaveProfile () {
  yield* takeEvery(USERS_SAVE_PROFILE, saveProfile)
}

function* flow () {
  yield [
    watchUserConnexion(),
    watchUserInscription(),
    watchFetchUsers(),
    watchCreateUser(),
    watchEditUser(),
    watchDeleteUser(),
    watchDeleteAccount(),
    watchSaveProfile()
  ]
}

export default flow
