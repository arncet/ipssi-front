import {GOOGLE_LOAD_CALENDAR, GOOGLE_LOAD_CALENDAR_SUCCESS, GOOGLE_LOAD_CALENDAR_FAILED,
 GOOGLE_FETCH_EVENTS, GOOGLE_FETCH_EVENTS_SUCCESS, GOOGLE_FETCH_EVENTS_FAILED,
 GOOGLE_CLEAR_CALENDAR_ERROR, GOOGLE_CALENDAR_SET_CURRENT_EVENT,
 GOOGLE_CALENDAR_OPEN_CREATE_MODAL, GOOGLE_CALENDAR_CLOSE_CREATE_MODAL,
 GOOGLE_CALENDAR_OPEN_EDIT_MODAL, GOOGLE_CALENDAR_CLOSE_EDIT_MODAL,
 GOOGLE_CALENDAR_OPEN_DELETE_MODAL, GOOGLE_CALENDAR_CLOSE_DELETE_MODAL,
 GOOGLE_CALENDAR_CREATE_EVENT, GOOGLE_CALENDAR_CREATE_EVENT_SUCCESS, GOOGLE_CALENDAR_CREATE_EVENT_FAILED,
 GOOGLE_CALENDAR_EDIT_EVENT, GOOGLE_CALENDAR_EDIT_EVENT_SUCCESS, GOOGLE_CALENDAR_EDIT_EVENT_FAILED,
 GOOGLE_CALENDAR_DELETE_EVENT, GOOGLE_CALENDAR_DELETE_EVENT_SUCCESS, GOOGLE_CALENDAR_DELETE_EVENT_FAILED} from '../actions'

const initialState = {events: [], loaded: false, currentEvent: null, deleteModalIsOpen: false, editModalIsOpen: false, createModalIsOpen: false, creationStatus: '', editionStatus: '', deletionStatus: ''}

export default function layer (state = initialState, {type, payload}) {
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
        events: payload.events,
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
    case GOOGLE_CALENDAR_OPEN_CREATE_MODAL:
      return {
        ...state,
        createModalIsOpen: true
      }
    case GOOGLE_CALENDAR_CLOSE_CREATE_MODAL:
      return {
        ...state,
        createModalIsOpen: false
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
        editionStatus: 'success'
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
        deletionStatus: 'success'
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
