import {call, put, select} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {NDF_CREATE, NDF_CREATE_SUCCESS, NDF_CREATE_FAILED,
 NDF_EDIT, NDF_EDIT_SUCCESS, NDF_EDIT_FAILED,
 NDF_DELETE, NDF_DELETE_SUCCESS, NDF_DELETE_FAILED,
 NOTIFICATION_ADD} from '../actions'
import {createNDFApi, editNDFApi, deleteNDFApi} from '../api/ndf'
import {getNDFIdToDelete} from '../selectors/ndf'
import {getMe} from '../selectors/users'
import {getPath} from '../utils/routes'
import {getRandomString} from '../utils/string'

//Create
function* createNDF ({payload: {ndf}}) {
  try {
    const state = yield select()
    const me = getMe(state)
    const createdNDF = yield call(createNDFApi, ndf, me.id)
    yield put({type: NDF_CREATE_SUCCESS, payload: {ndf: createdNDF}})
    window.location.href = `#/${getPath('intranet-notes-de-frais-id', {id: createdNDF.id})}` //Use history
  } catch(e) {
    yield put({type: NDF_CREATE_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR CREATE NDF', e)
  }
}

function* watchCreateNDF () {
  yield* takeEvery(NDF_CREATE, createNDF)
}

//Edit
function* editNDF ({payload: {ndf}}) {
  try {
    const editedNDF = yield call(editNDFApi, ndf)
    yield put({type: NDF_EDIT_SUCCESS, payload: {ndf: editedNDF}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La modification de la note de frais a bien été prise en compte.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: NDF_EDIT_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR EDIT NDF', e)
  }
}

function* watchEditNDF () {
  yield* takeEvery(NDF_EDIT, editNDF)
}

//Delete
function* deleteNDF () {
  try {
    const state = yield select()
    const ndfId = getNDFIdToDelete(state)
    yield call(deleteNDFApi, ndfId)
    yield put({type: NDF_DELETE_SUCCESS, payload: {ndfId}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `La note de frais a bien été supprimée.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: NDF_DELETE_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR DELETE NDF', e)
  }
}

function* watchDeleteNDF () {
  yield* takeEvery(NDF_DELETE, deleteNDF)
}

function* flow () {
  yield [
    watchCreateNDF(),
    watchEditNDF(),
    watchDeleteNDF()
  ]
}

export default flow
