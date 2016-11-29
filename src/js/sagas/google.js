import {call, put} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {GOOGLE_SEND_EMAIL, GOOGLE_SEND_EMAIL_SUCCESS, GOOGLE_SEND_EMAIL_FAILED,
  GOOGLE_AUTH, GOOGLE_AUTH_SUCCESS, GOOGLE_AUTH_FAILED,
  GOOGLE_LOAD_GMAIL, GOOGLE_LOAD_GMAIL_SUCCESS, GOOGLE_LOAD_GMAIL_FAILED,
  GOOGLE_FETCH_EMAILS, GOOGLE_FETCH_EMAILS_SUCCESS, GOOGLE_FETCH_EMAILS_FAILED} from '../actions'
import {sendEmailApi, googleAuthApi, gmailLoadApi, 
  gmailFetchLabelsApi, gmailFetchEmailsApi, gmailFetchEmail} from '../api/google'

//Send email
function* googleSendEmail () {
  try {
    const email = yield call(sendEmailApi)
    yield put({type: GOOGLE_SEND_EMAIL_SUCCESS, payload: {email}})
  } catch(e) {
    yield put({type: GOOGLE_SEND_EMAIL_FAILED})
    console.error('ERROR GOOGLE SEND EMAIL', e)
  }
}

function* watchGoogleInit () {
  yield* takeEvery(GOOGLE_SEND_EMAIL, googleSendEmail)
}

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

//Gmail load
function* gmailLoad () {
  try {
    yield call(gmailLoadApi)
    yield put({type: GOOGLE_LOAD_GMAIL_SUCCESS})
  } catch(e) {
    yield put({type: GOOGLE_LOAD_GMAIL_FAILED})
    console.error('ERROR GOOGLE LOAD', e)
  }
}

function* watchGmailLoad () {
  yield* takeEvery(GOOGLE_LOAD_GMAIL, gmailLoad)
}

//Gmail fetch emails
function* gmailFetchEmails () {
  try {
    const emailsIds = yield call(gmailFetchEmailsApi)
    const emails = yield emailsIds.map(({id}) => call(gmailFetchEmail, id))
    const labels = yield call(gmailFetchLabelsApi)
    yield put({type: GOOGLE_FETCH_EMAILS_SUCCESS, payload: {emails, labels}})
  } catch(e) {
    yield put({type: GOOGLE_FETCH_EMAILS_FAILED})
    console.error('ERROR GOOGLE FETCH EMAILS', e)
  }
}

function* watchGmailFetchEmails () {
  yield* takeEvery(GOOGLE_FETCH_EMAILS, gmailFetchEmails)
}

function* flow () {
  yield [
    watchGoogleInit(),
    watchGoogleAuth(),
    watchGmailLoad(),
    watchGmailFetchEmails()
  ]
}

export default flow
