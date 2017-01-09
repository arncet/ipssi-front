import {GOOGLE_LOAD_CALENDAR, GOOGLE_LOAD_CALENDAR_SUCCESS, GOOGLE_LOAD_CALENDAR_FAILED,
 GOOGLE_FETCH_EVENTS, GOOGLE_FETCH_EVENTS_SUCCESS, GOOGLE_FETCH_EVENTS_FAILED,
 GOOGLE_CLEAR_CALENDAR_ERROR, GOOGLE_CALENDAR_SET_CURRENT_EVENT,
 GOOGLE_CALENDAR_OPEN_CREATE_MODAL, GOOGLE_CALENDAR_CLOSE_CREATE_MODAL,
 GOOGLE_CALENDAR_OPEN_EDIT_MODAL, GOOGLE_CALENDAR_CLOSE_EDIT_MODAL,
 GOOGLE_CALENDAR_OPEN_DELETE_MODAL, GOOGLE_CALENDAR_CLOSE_DELETE_MODAL,
 GOOGLE_CALENDAR_CREATE_EVENT, GOOGLE_CALENDAR_CREATE_EVENT_SUCCESS, GOOGLE_CALENDAR_CREATE_EVENT_FAILED,
 GOOGLE_CALENDAR_EDIT_EVENT, GOOGLE_CALENDAR_EDIT_EVENT_SUCCESS, GOOGLE_CALENDAR_EDIT_EVENT_FAILED,
 GOOGLE_CALENDAR_DELETE_EVENT, GOOGLE_CALENDAR_DELETE_EVENT_SUCCESS, GOOGLE_CALENDAR_DELETE_EVENT_FAILED} from '../actions'

const initialState = {events: {}, loaded: false, currentEvent: null, stashEvent: null, deleteModalIsOpen: false, editModalIsOpen: false, createModalIsOpen: false, creationStatus: '', editionStatus: '', deletionStatus: ''}

export default function calendar (state = initialState, {type, payload}) {
  switch (type) {
    case GOOGLE_LOAD_CALENDAR:
      return {
        ...state,
        status: 'pending'
      }
    case GOOGLE_LOAD_CALENDAR_SUCCESS:
      return {
        ...state,
        loaded: true,
        status: ''
      }
    case GOOGLE_LOAD_CALENDAR_FAILED:
      return {
        ...state,
        status: 'error'
      }
    case GOOGLE_FETCH_EVENTS:
      return {
        ...state,
        status: 'pending'
      }
    case GOOGLE_FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        events: payload.events.reduce((prev, event) => {
          return {...prev, [event.id]: event}
        }, {}),
        status: ''
      }
    case GOOGLE_FETCH_EVENTS_FAILED:
      return {
        ...state,
        status: 'error'
      }
    case GOOGLE_CLEAR_CALENDAR_ERROR:
      return {
        ...state,
        status: ''
      }
    case GOOGLE_CALENDAR_SET_CURRENT_EVENT:
      return {
        ...state,
        currentEvent: payload.currentEvent
      }
    case GOOGLE_CALENDAR_OPEN_CREATE_MODAL: {
      const stashEvent = payload.date ? {start: {dateTime: payload.date}} : null
      return {
        ...state,
        createModalIsOpen: true,
        stashEvent
      }
    }
    case GOOGLE_CALENDAR_CLOSE_CREATE_MODAL:
      return {
        ...state,
        createModalIsOpen: false,
        stashEvent: null
      }
    case GOOGLE_CALENDAR_OPEN_EDIT_MODAL:
      return {
        ...state,
        editModalIsOpen: true
      }
    case GOOGLE_CALENDAR_CLOSE_EDIT_MODAL:
      return {
        ...state,
        editModalIsOpen: false
      }
    case GOOGLE_CALENDAR_OPEN_DELETE_MODAL:
      return {
        ...state,
        deleteModalIsOpen: true
      }
    case GOOGLE_CALENDAR_CLOSE_DELETE_MODAL:
      return {
        ...state,
        deleteModalIsOpen: false
      }
    case GOOGLE_CALENDAR_CREATE_EVENT:
      return {
        ...state,
        creationStatus: 'pending'
      }
    case GOOGLE_CALENDAR_CREATE_EVENT_SUCCESS:
      return {
        ...state,
        events: {
          ...state.events,
          [payload.event.id]: payload.event
        },
        creationStatus: 'success'
      }
    case GOOGLE_CALENDAR_CREATE_EVENT_FAILED:
      return {
        ...state,
        creationStatus: 'failed'
      }
    case GOOGLE_CALENDAR_EDIT_EVENT:
      return {
        ...state,
        editionStatus: 'pending'
      }
    case GOOGLE_CALENDAR_EDIT_EVENT_SUCCESS:
      return {
        ...state,
        editionStatus: 'success',
        editModalIsOpen: false,
        currentEvent: payload.event,
        events: {
          ...state.events,
          [payload.event.id]: payload.event
        }
      }
    case GOOGLE_CALENDAR_EDIT_EVENT_FAILED:
      return {
        ...state,
        editionStatus: 'failed'
      }
    case GOOGLE_CALENDAR_DELETE_EVENT:
      return {
        ...state,
        deletionStatus: 'pending'
      }
    case GOOGLE_CALENDAR_DELETE_EVENT_SUCCESS:
      return {
        ...state,
        deletionStatus: 'success',
        deleteModalIsOpen: false,
        events: Object.values(state.events).reduce((prev, event) => {
          return event.id === payload.eventId ? prev : {...prev, [event.id]: event}
        }, {}),
        currentEvent: null
      }
    case GOOGLE_CALENDAR_DELETE_EVENT_FAILED:
      return {
        ...state,
        deletionStatus: 'failed'
      }
    default:
      return state
  }
}
