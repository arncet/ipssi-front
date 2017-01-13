import {call, put, select} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {JOBS_CREATE, JOBS_CREATE_SUCCESS, JOBS_CREATE_FAILED,
 JOBS_EDIT, JOBS_EDIT_SUCCESS, JOBS_EDIT_FAILED,
 JOBS_SET_AVALIABLE, JOBS_SET_AVALIABLE_SUCCESS, JOBS_SET_AVALIABLE_FAILED,
 JOBS_DELETE, JOBS_DELETE_SUCCESS, JOBS_DELETE_FAILED} from '../actions'
import {createJobApi, editJobApi, deleteJobApi, setJobAvaliableApi} from '../api/jobs'
import {getJobIdToDelete} from '../selectors/jobs'
import {getPath} from '../utils/routes'

//Create
function* createJob ({payload: {job}}) {
  try {
    const createdJob = yield call(createJobApi, job)
    yield put({type: JOBS_CREATE_SUCCESS, payload: {job: createdJob}})
    window.location.href = getPath('intranet-offres-de-poste-id', {id: createdJob.id}) //Use history
  } catch(e) {
    yield put({type: JOBS_CREATE_FAILED})
    console.error('ERROR CREATE JOBS', e)
  }
}

function* watchCreateJob () {
  yield* takeEvery(JOBS_CREATE, createJob)
}

//Edit
function* editJob ({payload: {job}}) {
  try {
    const editedJobs = yield call(editJobApi, job)
    yield put({type: JOBS_EDIT_SUCCESS, payload: {job: editedJobs}})
  } catch(e) {
    yield put({type: JOBS_EDIT_FAILED})
    console.error('ERROR EDIT JOBS', e)
  }
}

function* watchEditJob () {
  yield* takeEvery(JOBS_EDIT, editJob)
}

//Delete
function* deleteJobs () {
  try {
    const state = yield select()
    const jobId = getJobIdToDelete(state)
    yield call(deleteJobApi, jobId)
    yield put({type: JOBS_DELETE_SUCCESS, payload: {jobId}})
  } catch(e) {
    yield put({type: JOBS_DELETE_FAILED})
    console.error('ERROR DELETE JOBS', e)
  }
}

function* watchDeleteJob () {
  yield* takeEvery(JOBS_DELETE, deleteJobs)
}

//Avaliable
function* setJobAvaliable ({payload: {jobId, avaliable}}) {
  try {
    yield call(setJobAvaliableApi, jobId, avaliable)
    yield put({type: JOBS_SET_AVALIABLE_SUCCESS, payload: {jobId, avaliable}})
  } catch(e) {
    yield put({type: JOBS_SET_AVALIABLE_FAILED})
    console.error('ERROR VALID CRA', e)
  }
}

function* watchSetJobAvaliable () {
  yield* takeEvery(JOBS_SET_AVALIABLE, setJobAvaliable)
}

function* flow () {
  yield [
    watchCreateJob(),
    watchEditJob(),
    watchDeleteJob(),
    watchSetJobAvaliable()
  ]
}

export default flow
