import {call, put} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {GOOGLE_SEND_EMAIL, GOOGLE_SEND_EMAIL_SUCCESS, GOOGLE_SEND_EMAIL_FAILED,
  GOOGLE_LOAD_GMAIL, GOOGLE_LOAD_GMAIL_SUCCESS, GOOGLE_LOAD_GMAIL_FAILED,
  GOOGLE_FETCH_EMAILS, GOOGLE_FETCH_EMAILS_SUCCESS, GOOGLE_FETCH_EMAILS_FAILED,
  NOTIFICATION_ADD} from '../actions'
import {sendEmailApi, gmailLoadApi,
  gmailFetchLabelsApi, gmailFetchEmailsApi, gmailFetchEmail} from '../api/google'
import {getRandomString} from '../utils/string'

//Send email
function* googleSendEmail ({payload: {message, obj, emails}}) {
  try {
    yield emails.map(email => call(sendEmailApi, {message, obj, email}))
    yield put({type: GOOGLE_SEND_EMAIL_SUCCESS, payload: {message, obj, emails}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `Votre e-mail a bien été envoyé.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: GOOGLE_SEND_EMAIL_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR GOOGLE SEND EMAIL', e)
  }
}

function* watchGoogleSendEmail () {
  yield* takeEvery(GOOGLE_SEND_EMAIL, googleSendEmail)
}

//Gmail load
function* gmailLoad () {
  try {
    yield call(gmailLoadApi)
    yield put({type: GOOGLE_LOAD_GMAIL_SUCCESS})
  } catch(e) {
    yield put({type: GOOGLE_LOAD_GMAIL_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
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
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, merci de réessayer.`, status: 'error'}})
    console.error('ERROR GOOGLE FETCH EMAILS', e)
  }
}

function* watchGmailFetchEmails () {
  yield* takeEvery(GOOGLE_FETCH_EMAILS, gmailFetchEmails)
}

function* flow () {
  yield [
    watchGoogleSendEmail(),
    watchGmailLoad(),
    watchGmailFetchEmails()
  ]
}

export default flow
