import { GOOGLE_AUTH, GOOGLE_AUTH_SUCCESS, GOOGLE_AUTH_FAILED,
 GOOGLE_LOAD_GMAIL_SUCCESS, GOOGLE_FETCH_EMAILS, 
 GOOGLE_FETCH_EMAILS_SUCCESS, GOOGLE_FETCH_EMAILS_FAILED } from '../actions'

const initialState = {
  auth: {authentified: false, status: ''},
  gmail: {emails: [], labels: [], loaded: false, status: ''},
  contacts: {contacts: [], loaded: false},
  news: {news: [], loaded: false},
  agenda: {events: [], loaded: false},
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
    default:
      return state
  }
}
