import {GOOGLE_LOAD_GMAIL_SUCCESS, GOOGLE_FETCH_EMAILS,
 GOOGLE_FETCH_EMAILS_SUCCESS, GOOGLE_FETCH_EMAILS_FAILED,
 GOOGLE_LOAD_GMAIL, GOOGLE_LOAD_GMAIL_FAILED,
 GOOGLE_OPEN_COMPOSE_EMAIL_MODAL, GOOGLE_CLOSE_COMPOSE_EMAIL_MODAL} from '../actions'

const initialState = {emails: [], labels: [], loaded: false, status: '', composeModalIsOpen: false}

export default function layer (state = initialState, {type, payload}) {
  switch (type) {
    case GOOGLE_LOAD_GMAIL:
      return {
        ...state,
        status: 'pending'
      }
    case GOOGLE_LOAD_GMAIL_SUCCESS:
      return {
        ...state,
        loaded: true,
        status: ''
      }
    case GOOGLE_LOAD_GMAIL_FAILED:
      return {
        ...state,
        status: 'error'
      }
    case GOOGLE_FETCH_EMAILS:
      return {
        ...state,
        status: 'pending'
      }
    case GOOGLE_FETCH_EMAILS_SUCCESS:
      return {
        ...state,
        emails: payload.emails,
        labels: payload.labels,
        status: ''
      }
    case GOOGLE_FETCH_EMAILS_FAILED:
      return {
        ...state,
        status: 'error'
      }
    case GOOGLE_OPEN_COMPOSE_EMAIL_MODAL:
      return {
        ...state,
        composeModalIsOpen: true
      }
    case GOOGLE_CLOSE_COMPOSE_EMAIL_MODAL:
      return {
        ...state,
        composeModalIsOpen: false
      }
    default:
      return state
  }
}
