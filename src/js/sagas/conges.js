import {call, put, select} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {CONGES_CREATE, CONGES_CREATE_SUCCESS, CONGES_CREATE_FAILED,
 CONGES_EDIT, CONGES_EDIT_SUCCESS, CONGES_EDIT_FAILED,
 CONGES_DELETE, CONGES_DELETE_SUCCESS, CONGES_DELETE_FAILED,
 CONGES_VALID, CONGES_VALID_SUCCESS, CONGES_VALID_FAILED,
 NOTIFICATION_ADD} from '../actions'
import {createCongesApi, editCongesApi, deleteCongesApi, validCongesApi} from '../api/conges'
import {getCongesIdToDelete} from '../selectors/conges'
import {getPath} from '../utils/routes'
import {getMe} from '../selectors/users'
import {getRandomString} from '../utils/string'

//Create
function* createConges ({payload: {conges}}) {
  try {
    const state = yield select()
    const me = getMe(state)
    const createdConges = yield call(createCongesApi, conges, me.id)
    yield put({type: CONGES_CREATE_SUCCESS, payload: {conges: createdConges}})
    window.location.href = `#/${getPath('intranet-demandes-de-conges-id', {id: createdConges.id})}` //Use history
  } catch(e) {
    yield put({type: CONGES_CREATE_FAILED})
    console.error('ERROR CREATE CONGES', e)
  }
}

function* watchCreateConges () {
  yield* takeEvery(CONGES_CREATE, createConges)
}

//Edit
function* editConges ({payload: {conges}}) {
  try {
    const editedConges = yield call(editCongesApi, conges)
    yield put({type: CONGES_EDIT_SUCCESS, payload: {conges: editedConges}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La modification de la demande de congés a bien été prise en compte.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: CONGES_EDIT_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, l\'evenement <i>${event.summary || 'Sans titre'}</i> n'a pu être créé.`, status: 'error'}})
    console.error('ERROR EDIT CONGES', e)
  }
}

function* watchEditConges () {
  yield* takeEvery(CONGES_EDIT, editConges)
}

//Delete
function* deleteConges () {
  try {
    const state = yield select()
    const congesId = getCongesIdToDelete(state)
    yield call(deleteCongesApi, congesId)
    yield put({type: CONGES_DELETE_SUCCESS, payload: {congesId}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La demande de congés a bien été supprimée.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: CONGES_DELETE_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, l\'evenement <i>${event.summary || 'Sans titre'}</i> n'a pu être créé.`, status: 'error'}})
    console.error('ERROR DELETE CONGES', e)
  }
}

function* watchDeleteConges () {
  yield* takeEvery(CONGES_DELETE, deleteConges)
}

//Valid
function* validConges ({payload: {congesId, valid, comment}}) {
  try {
    yield call(validCongesApi, congesId)
    yield put({type: CONGES_VALID_SUCCESS, payload: {congesId, valid, comment}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La modification de la demande de congés a bien été prise en compte.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: CONGES_VALID_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, l\'evenement <i>${event.summary || 'Sans titre'}</i> n'a pu être créé.`, status: 'error'}})
    console.error('ERROR VALID CONGES', e)
  }
}

function* watchValidConges () {
  yield* takeEvery(CONGES_VALID, validConges)
}

function* flow () {
  yield [
    watchCreateConges(),
    watchEditConges(),
    watchDeleteConges(),
    watchValidConges()
  ]
}

export default flow
