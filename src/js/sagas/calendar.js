import {call, put} from 'redux-saga/effects'
import {takeEvery} from 'redux-saga'
import {GOOGLE_FETCH_EVENTS, GOOGLE_FETCH_EVENTS_SUCCESS, GOOGLE_FETCH_EVENTS_FAILED,
 GOOGLE_LOAD_CALENDAR, GOOGLE_LOAD_CALENDAR_SUCCESS, GOOGLE_LOAD_CALENDAR_FAILED,
 GOOGLE_CALENDAR_CREATE_EVENT, GOOGLE_CALENDAR_CREATE_EVENT_SUCCESS, GOOGLE_CALENDAR_CREATE_EVENT_FAILED,
 GOOGLE_CALENDAR_EDIT_EVENT, GOOGLE_CALENDAR_EDIT_EVENT_SUCCESS, GOOGLE_CALENDAR_EDIT_EVENT_FAILED,
 GOOGLE_CALENDAR_DELETE_EVENT, GOOGLE_CALENDAR_DELETE_EVENT_SUCCESS, GOOGLE_CALENDAR_DELETE_EVENT_FAILED,
 NOTIFICATION_ADD} from '../actions'
import {calendarFetchEventsApi, calendarLoadApi, calendarCreateEventApi, calendarEditEventApi,
 calendarDeleteEventApi} from '../api/google'
import {getRandomString} from '../utils/string'

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
    const newEvent = yield call(calendarCreateEventApi, event)
    yield put({type: GOOGLE_CALENDAR_CREATE_EVENT_SUCCESS, payload: {event: newEvent}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `L\'evenement <i>${event.summary || '(Sans titre)'}</i> à bien été créé.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: GOOGLE_CALENDAR_CREATE_EVENT_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, l\'evenement <i>${event.summary || 'Sans titre'}</i> n'a pu être créé.`, status: 'error'}})
    console.error('ERROR GOOGLE CREATE EVENT', e)
  }
}

function* watchCalendarCreateEvent () {
  yield* takeEvery(GOOGLE_CALENDAR_CREATE_EVENT, calendarCreateEvent)
}

//Calendar edit event
function* calendarEditEvent ({payload: {event}}) {
  try {
    yield call(calendarEditEventApi, event)
    yield put({type: GOOGLE_CALENDAR_EDIT_EVENT_SUCCESS, payload: {event}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `L\'evenement <i>${event.summary || '(Sans titre)'}</i> à bien été modifié.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: GOOGLE_CALENDAR_EDIT_EVENT_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, l\'evenement <i>${event.summary || 'Sans titre'}</i> n'a pu être modifié.`, status: 'error'}})
    console.error('ERROR GOOGLE EDIT EVENT', e)
  }
}

function* watchCalendarEditEvent () {
  yield* takeEvery(GOOGLE_CALENDAR_EDIT_EVENT, calendarEditEvent)
}

//Calendar delete event
function* calendarDeleteEvent ({payload: {eventId}}) {
  try {
    yield call(calendarDeleteEventApi, eventId)
    yield put({type: GOOGLE_CALENDAR_DELETE_EVENT_SUCCESS, payload: {eventId}})
    yield put({
      type: NOTIFICATION_ADD,
      payload: {
        notification: {
          id: getRandomString(),
          message: `L\'evenement à bien été supprimé.`, status: 'success',
          autoClosingDelay: 5000
        }
      }
    })
  } catch(e) {
    yield put({type: GOOGLE_CALENDAR_DELETE_EVENT_FAILED})
    yield put({type: NOTIFICATION_ADD, payload: {id: getRandomString(), message: `Une erreur est survenue, l\'evenement n'a pu être supprimé.`, status: 'error'}})
    console.error('ERROR GOOGLE DELETE EVENT', e)
  }
}

function* watchCalendarDeleteEvent () {
  yield* takeEvery(GOOGLE_CALENDAR_DELETE_EVENT, calendarDeleteEvent)
}

function* flow () {
  yield [
    watchCalendarLoad(),
    watchCalendarFetchEvents(),
    watchCalendarCreateEvent(),
    watchCalendarEditEvent(),
    watchCalendarDeleteEvent()
  ]
}

export default flow
