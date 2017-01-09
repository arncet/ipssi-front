import {call, put, select} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {CRA_CREATE, CRA_CREATE_SUCCESS, CRA_CREATE_FAILED,
 CRA_EDIT, CRA_EDIT_SUCCESS, CRA_EDIT_FAILED,
 CRA_DELETE, CRA_DELETE_SUCCESS, CRA_DELETE_FAILED} from '../actions'
import {createCRAApi, editCRAApi, deleteCRAApi} from '../api/cra'
import {getCRAIdToDelete} from '../selectors/cra'

//Create
function* createCRA ({payload: {cra}}) {
  try {
    const createdCRA = yield call(createCRAApi, cra)
    yield put({type: CRA_CREATE_SUCCESS, payload: {cra: createdCRA}})
  } catch(e) {
    yield put({type: CRA_CREATE_FAILED})
    console.error('ERROR CREATE CRA', e)
  }
}

function* watchCreateCRA () {
  yield* takeEvery(CRA_CREATE, createCRA)
}

//Edit
function* editCRA ({payload: {cra}}) {
  try {
    const editedCRA = yield call(editCRAApi, cra)
    yield put({type: CRA_EDIT_SUCCESS, payload: {cra: editedCRA}})
  } catch(e) {
    yield put({type: CRA_EDIT_FAILED})
    console.error('ERROR EDIT CRA', e)
  }
}

function* watchEditCRA () {
  yield* takeEvery(CRA_EDIT, editCRA)
}

//Delete
function* deleteCRA () {
  try {
    const state = yield select()
    const craId = getCRAIdToDelete(state)
    yield call(deleteCRAApi, craId)
    yield put({type: CRA_DELETE_SUCCESS, payload: {craId}})
  } catch(e) {
    yield put({type: CRA_DELETE_FAILED})
    console.error('ERROR DELETE CRA', e)
  }
}

function* watchDeleteCRA () {
  yield* takeEvery(CRA_DELETE, deleteCRA)
}

function* flow () {
  yield [
    watchCreateCRA(),
    watchEditCRA(),
    watchDeleteCRA()
  ]
}

export default flow
