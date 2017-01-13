import {call, put, select} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {CV_CREATE, CV_CREATE_SUCCESS, CV_CREATE_FAILED,
 CV_EDIT, CV_EDIT_SUCCESS, CV_EDIT_FAILED,
 CV_DELETE, CV_DELETE_SUCCESS, CV_DELETE_FAILED,
 CV_VALID, CV_VALID_SUCCESS, CV_VALID_FAILED,
 CV_ASK_FOR_EDITION, CV_ASK_FOR_EDITION_SUCCESS, CV_ASK_FOR_EDITION_FAILED} from '../actions'
import {createCVApi, editCVApi, deleteCVApi, validCVApi, askForEditionCVApi} from '../api/cv'
import {getCVIdToDelete} from '../selectors/cv'
import {getPath} from '../utils/routes'

//Create
function* createCV ({payload: {cv}}) {
  try {
    const createdCV = yield call(createCVApi, cv)
    yield put({type: CV_CREATE_SUCCESS, payload: {cv: createdCV}})
    window.location.href = getPath('intranet-cvtheque-id', {id: createdCV.id}) //Use history
  } catch(e) {
    yield put({type: CV_CREATE_FAILED})
    console.error('ERROR CREATE CV', e)
  }
}

function* watchCreateCV () {
  yield* takeEvery(CV_CREATE, createCV)
}

//Edit
function* editCV ({payload: {cv}}) {
  try {
    const editedCV = yield call(editCVApi, cv)
    yield put({type: CV_EDIT_SUCCESS, payload: {cv: editedCV}})
  } catch(e) {
    yield put({type: CV_EDIT_FAILED})
    console.error('ERROR EDIT CV', e)
  }
}

function* watchEditCV () {
  yield* takeEvery(CV_EDIT, editCV)
}

//Delete
function* deleteCV () {
  try {
    const state = yield select()
    const cvId = getCVIdToDelete(state)
    yield call(deleteCVApi, cvId)
    yield put({type: CV_DELETE_SUCCESS, payload: {cvId}})
  } catch(e) {
    yield put({type: CV_DELETE_FAILED})
    console.error('ERROR DELETE CV', e)
  }
}

function* watchDeleteCV () {
  yield* takeEvery(CV_DELETE, deleteCV)
}

//Valid
function* validCV ({payload: {cvId}}) {
  try {
    yield call(validCVApi, cvId)
    yield put({type: CV_VALID_SUCCESS, payload: {cvId}})
  } catch(e) {
    yield put({type: CV_VALID_FAILED})
    console.error('ERROR VALID CV', e)
  }
}

function* watchValidCV () {
  yield* takeEvery(CV_VALID, validCV)
}

//Ask for edition
function* askForEditionCV ({payload: {cvId, comment}}) {
  try {
    yield call(askForEditionCVApi, cvId, comment)
    yield put({type: CV_ASK_FOR_EDITION_SUCCESS, payload: {cvId}})
  } catch(e) {
    yield put({type: CV_ASK_FOR_EDITION_FAILED})
    console.error('ERROR ASK FOR EDITION CV', e)
  }
}

function* watchAskForEditionCV () {
  yield* takeEvery(CV_ASK_FOR_EDITION, askForEditionCV)
}

function* flow () {
  yield [
    watchCreateCV(),
    watchEditCV(),
    watchDeleteCV(),
    watchValidCV(),
    watchAskForEditionCV()
  ]
}

export default flow
