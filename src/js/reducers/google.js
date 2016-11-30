import {GOOGLE_AUTH, GOOGLE_AUTH_SUCCESS, GOOGLE_AUTH_FAILED,
 GOOGLE_LOAD_GMAIL_SUCCESS, GOOGLE_FETCH_EMAILS, 
 GOOGLE_FETCH_EMAILS_SUCCESS, GOOGLE_FETCH_EMAILS_FAILED,
 GOOGLE_LOAD_CALENDAR, GOOGLE_LOAD_CALENDAR_SUCCESS, GOOGLE_LOAD_CALENDAR_FAILED,
 GOOGLE_FETCH_EVENTS, GOOGLE_FETCH_EVENTS_SUCCESS, GOOGLE_FETCH_EVENTS_FAILED} from '../actions'

const initialState = {
  auth: {authentified: false, status: ''},
  gmail: {emails: [], labels: [], loaded: false, status: ''},
  contacts: {contacts: [], loaded: false, status: ''},
  news: {news: [], loaded: false},
  calendar: {events: [], loaded: false},
  docs: {docs: [], loaded: false}
}

export default function layer (state = initialState, {type, payload}) {
  switch (type) {
    case GOOGLE_AUTH:
      return {
        ...state,
        auth: {
          ...state.auth,
          status: 'pending'
        }
      }
    case GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        auth: {
          authentified: true,
          status: ''
        }
      }
    case GOOGLE_AUTH_FAILED:
      return {
        ...state,
        auth: {
          authentified: false,
          status: 'error'
        }
      }
    case GOOGLE_LOAD_GMAIL_SUCCESS:
      return {
        ...state,
        gmail: {
          ...state.gmail,
          loaded: true
        }
      }
    case GOOGLE_FETCH_EMAILS: 
      return {
        ...state,
        gmail: {
          ...state.gmail,
          status: 'pending'
        }
      }
    case GOOGLE_FETCH_EMAILS_SUCCESS: 
      return {
        ...state,
        gmail: {
          ...state,
          emails: payload.emails,
          labels: payload.labels,
          status: ''
        }
      }
    case GOOGLE_FETCH_EMAILS_FAILED: 
      return {
        ...state,
        gmail: {
          ...state,
          status: 'error'
        }
      }
    case GOOGLE_LOAD_CALENDAR:
      return {
        ...state,
        calendar: {
          ...state.calendar,
          status: 'pending'
        }
      }
    case GOOGLE_LOAD_CALENDAR_SUCCESS:
      return {
        ...state,
        calendar: {
          ...state.calendar,
          status: 'error'
        }
      }
    case GOOGLE_FETCH_EVENTS: 
      return {
        ...state,
        calendar: {
          ...state.calendar,
          status: 'pending'
        }
      }
    case GOOGLE_FETCH_EVENTS_SUCCESS: 
      return {
        ...state,
        calendar: {
          ...state,
          events: payload.events,
          status: ''
        }
      }
    case GOOGLE_FETCH_EVENTS_FAILED: 
      return {
        ...state,
        calendar: {
          ...state,
          status: 'error'
        }
      }
    default:
      return state
  }
}
