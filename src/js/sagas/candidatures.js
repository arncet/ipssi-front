import {call, put, select} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {CANDIDATURES_CREATE, CANDIDATURES_CREATE_SUCCESS, CANDIDATURES_CREATE_FAILED,
 CANDIDATURES_EDIT, CANDIDATURES_EDIT_SUCCESS, CANDIDATURES_EDIT_FAILED,
 CANDIDATURES_SET_VALID, CANDIDATURES_SET_VALID_SUCCESS, CANDIDATURES_SET_VALID_FAILED,
 CANDIDATURES_DELETE, CANDIDATURES_DELETE_SUCCESS, CANDIDATURES_DELETE_FAILED,
 NOTIFICATION_ADD} from '../actions'
import {createCandidatureApi, editCandidatureApi, deleteCandidatureApi, setCandidatureValidApi} from '../api/candidatures'
import {getCandidatureIdToDelete} from '../selectors/candidatures'
import {getMe} from '../selectors/users'
import {getRandomString} from '../utils/string'

//Create
function* createCandidature ({payload: {candidature}}) {
  try {
    const state = yield select()
    const me = getMe(state)
    const createdCandidature = yield call(createCandidatureApi, candidature, me.id)
    yield put({type: CANDIDATURES_CREATE_SUCCESS, payload: {candidature: createdCandidature}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `Votre candidature a bien été prise en compte.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: CANDIDATURES_CREATE_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR CREATE CANDIDATURES', e)
  }
}

function* watchCreateCandidature () {
  yield* takeEvery(CANDIDATURES_CREATE, createCandidature)
}

//Edit
function* editCandidature ({payload: {candidature}}) {
  try {
    const editedCandidatures = yield call(editCandidatureApi, candidature)
    yield put({type: CANDIDATURES_EDIT_SUCCESS, payload: {candidature: editedCandidatures}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La modification de la candidature a bien été prise en compte`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: CANDIDATURES_EDIT_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR EDIT CANDIDATURES', e)
  }
}

function* watchEditCandidature () {
  yield* takeEvery(CANDIDATURES_EDIT, editCandidature)
}

//Delete
function* deleteCandidatures () {
  try {
    const state = yield select()
    const candidatureId = getCandidatureIdToDelete(state)
    yield call(deleteCandidatureApi, candidatureId)
    yield put({type: CANDIDATURES_DELETE_SUCCESS, payload: {candidatureId}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La suppression de la candidature a été efectué avec succces.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: CANDIDATURES_DELETE_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR DELETE CANDIDATURES', e)
  }
}

function* watchDeleteCandidature () {
  yield* takeEvery(CANDIDATURES_DELETE, deleteCandidatures)
}

//Valid
function* setCandidatureValid ({payload: {candidatureId, valid}}) {
  try {
    yield call(setCandidatureValidApi, candidatureId, valid)
    yield put({type: CANDIDATURES_SET_VALID_SUCCESS, payload: {candidatureId, valid}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La modification de la candidature a bien été prise en compte`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: CANDIDATURES_SET_VALID_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR VALID CANDIDATURES', e)
  }
}

function* watchSetCandidatureValid () {
  yield* takeEvery(CANDIDATURES_SET_VALID, setCandidatureValid)
}

function* flow () {
  yield [
    watchCreateCandidature(),
    watchEditCandidature(),
    watchDeleteCandidature(),
    watchSetCandidatureValid()
  ]
}

export default flow
