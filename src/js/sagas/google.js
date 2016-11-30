import {call, put} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {GOOGLE_SEND_EMAIL, GOOGLE_SEND_EMAIL_SUCCESS, GOOGLE_SEND_EMAIL_FAILED,
  GOOGLE_AUTH, GOOGLE_AUTH_SUCCESS, GOOGLE_AUTH_FAILED,
  GOOGLE_LOAD_GMAIL, GOOGLE_LOAD_GMAIL_SUCCESS, GOOGLE_LOAD_GMAIL_FAILED,
  GOOGLE_FETCH_EMAILS, GOOGLE_FETCH_EMAILS_SUCCESS, GOOGLE_FETCH_EMAILS_FAILED,
  GOOGLE_FETCH_EVENTS, GOOGLE_FETCH_EVENTS_SUCCESS, GOOGLE_FETCH_EVENTS_FAILED,
  GOOGLE_LOAD_CALENDAR, GOOGLE_LOAD_CALENDAR_SUCCESS, GOOGLE_LOAD_CALENDAR_FAILED} from '../actions'
import {sendEmailApi, googleAuthApi, gmailLoadApi, 
  gmailFetchLabelsApi, gmailFetchEmailsApi, gmailFetchEmail,
  calendarFetchEventsApi, calendarLoadApi} from '../api/google'

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

//Calendar load
function* calendarLoad () {
  try {
    yield call(calendarLoadApi)
    yield put({type: GOOGLE_LOAD_CALENDAR_SUCCESS})
  } catch(e) {
    yield put({type: GOOGLE_LOAD_CALENDAR_FAILED})
    console.error('ERROR GOOGLE LOAD', e)
  }
}

function* watchGmailLoad () {
  yield* takeEvery(GOOGLE_LOAD_CALENDAR, calendarLoad)
}


//Calendar fetch events
function* calendarFetchEvents () {
  try {
    const events = yield call(calendarFetchEventsApi)
    yield put({type: GOOGLE_FETCH_EVENTS_SUCCESS, payload: {events}})
  } catch(e) {
    yield put({type: GOOGLE_FETCH_EVENTS_FAILED})
    console.error('ERROR GOOGLE FETCH EMAILS', e)
  }
}

function* watchCalendarFetchEvents () {
  yield* takeEvery(GOOGLE_FETCH_EVENTS, calendarFetchEvents)
}

function* flow () {
  yield [
    watchGoogleInit(),
    watchGoogleAuth(),
    watchGmailLoad(),
    watchGmailFetchEmails(),
    watchCalendarFetchEvents()
  ]
}

export default flow
