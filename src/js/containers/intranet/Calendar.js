import { connect } from 'react-redux'
import {GOOGLE_CLEAR_CALENDAR_ERROR, GOOGLE_CALENDAR_SET_CURRENT_EVENT,
 GOOGLE_CALENDAR_OPEN_CREATE_MODAL, GOOGLE_CALENDAR_CLOSE_CREATE_MODAL,
 GOOGLE_CALENDAR_OPEN_EDIT_MODAL, GOOGLE_CALENDAR_CLOSE_EDIT_MODAL,
 GOOGLE_CALENDAR_OPEN_DELETE_MODAL, GOOGLE_CALENDAR_CLOSE_DELETE_MODAL,
 GOOGLE_CALENDAR_CREATE_EVENT, GOOGLE_CALENDAR_EDIT_EVENT, GOOGLE_CALENDAR_DELETE_EVENT} from '../../actions'
import {getAuthStatus} from '../../selectors/auth'
import {getCalendarEvents, getCalendarStatus, getCurrentEvent,
 getCreateModalIsOpen, getEditModalIsOpen, getDeleteModalIsOpen,
 getCreationStatus, getEditionStatus, getDeletionStatus, getStashEvent} from '../../selectors/calendar'

import Calendar from '../../components/intranet/calendar/Calendar'

const mapStateToProps = state => {
  const events = getCalendarEvents(state)
  const isLoading = getCalendarStatus(state) === 'pending' || getAuthStatus(state) === 'pending'
  const error = getCalendarStatus(state) === 'error' || getAuthStatus(state) === 'error'
  const currentEvent = getCurrentEvent(state)
  const createModalIsOpen = getCreateModalIsOpen(state)
  const editModalIsOpen = getEditModalIsOpen(state)
  const deleteModalIsOpen = getDeleteModalIsOpen(state)
  const creationStatus = getCreationStatus(state)
  const editionStatus = getEditionStatus(state)
  const deletionStatus = getDeletionStatus(state)
  const stashEvent = getStashEvent(state)

  return {
    events,
    isLoading,
    error,
    currentEvent,
    createModalIsOpen,
    editModalIsOpen,
    deleteModalIsOpen,
    creationStatus,
    editionStatus,
    deletionStatus,
    stashEvent
  }
}

const mapDispatchToProps = dispatch => ({
  cleanCLaendarerror: () => dispatch({type: GOOGLE_CLEAR_CALENDAR_ERROR}),
  setCurrentEvent: currentEvent => dispatch({type: GOOGLE_CALENDAR_SET_CURRENT_EVENT, payload: {currentEvent}}),
  openCreateModal: date => dispatch({type: GOOGLE_CALENDAR_OPEN_CREATE_MODAL, payload: {date}}),
  closeCreateModal: () => dispatch({type: GOOGLE_CALENDAR_CLOSE_CREATE_MODAL}),
  openEditModal: eventId => dispatch({type: GOOGLE_CALENDAR_OPEN_EDIT_MODAL, payload: {eventId}}),
  closeEditModal: () => dispatch({type: GOOGLE_CALENDAR_CLOSE_EDIT_MODAL}),
  openDeleteModal: eventId => dispatch({type: GOOGLE_CALENDAR_OPEN_DELETE_MODAL, payload: {eventId}}),
  closeDeleteModal: () => dispatch({type: GOOGLE_CALENDAR_CLOSE_DELETE_MODAL}),
  createEvent: event => dispatch({type: GOOGLE_CALENDAR_CREATE_EVENT, payload: {event}}),
  editEvent: event => dispatch({type: GOOGLE_CALENDAR_EDIT_EVENT, payload: {event}}),
  deleteEvent: eventId => dispatch({type: GOOGLE_CALENDAR_DELETE_EVENT, payload: {eventId}})
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
