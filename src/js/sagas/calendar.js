import {call, put} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {GOOGLE_FETCH_EVENTS, GOOGLE_FETCH_EVENTS_SUCCESS, GOOGLE_FETCH_EVENTS_FAILED,
 GOOGLE_LOAD_CALENDAR, GOOGLE_LOAD_CALENDAR_SUCCESS, GOOGLE_LOAD_CALENDAR_FAILED,
 GOOGLE_CALENDAR_CREATE_EVENT, GOOGLE_CALENDAR_CREATE_EVENT_SUCCESS, GOOGLE_CALENDAR_CREATE_EVENT_FAILED,
 GOOGLE_CALENDAR_EDIT_EVENT, GOOGLE_CALENDAR_EDIT_EVENT_SUCCESS, GOOGLE_CALENDAR_EDIT_EVENT_FAILED,
 GOOGLE_CALENDAR_DELETE_EVENT, GOOGLE_CALENDAR_DELETE_EVENT_SUCCESS, GOOGLE_CALENDAR_DELETE_EVENT_FAILED} from '../actions'
import {calendarFetchEventsApi, calendarLoadApi, calendarCreateEventApi} from '../api/google'

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

function* watchCalendarLoad () {
  yield* takeEvery(GOOGLE_LOAD_CALENDAR, calendarLoad)
}

//Calendar fetch events
function* calendarFetchEvents () {
  try {
    const events = yield call(calendarFetchEventsApi)
    yield put({type: GOOGLE_FETCH_EVENTS_SUCCESS, payload: {events}})
  } catch(e) {
    yield put({type: GOOGLE_FETCH_EVENTS_FAILED})
    console.error('ERROR GOOGLE FETCH EVENT', e)
  }
}

function* watchCalendarFetchEvents () {
  yield* takeEvery(GOOGLE_FETCH_EVENTS, calendarFetchEvents)
}

//Calendar create event
function* calendarCreateEvent ({payload: {event}}) {
  try {
    yield call(calendarCreateEventApi, event)
    yield put({type: GOOGLE_CALENDAR_CREATE_EVENT_SUCCESS})
  } catch(e) {
    yield put({type: GOOGLE_CALENDAR_CREATE_EVENT_FAILED})
    console.error('ERROR GOOGLE CREATE EVENT', e)
  }
}

function* watchCalendarCreateEvent () {
  yield* takeEvery(GOOGLE_CALENDAR_CREATE_EVENT, calendarCreateEvent)
}

function* flow () {
  yield [
    watchCalendarLoad(),
    watchCalendarFetchEvents(),
    watchCalendarCreateEvent()
  ]
}

export default flow
