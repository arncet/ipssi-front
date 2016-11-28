import { GOOGLE_AUTH, GOOGLE_AUTH_SUCCESS, GOOGLE_AUTH_FAILED,
 GOOGLE_LOAD_GMAIL_SUCCESS } from '../actions'

const initialState = {
  auth: {authentified: false, status: ''},
  gmail: {inbox: [], outbox: [], loaded: false},
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
    default:
      return state
  }
}
