export const calendarApiIsLoaded = state => state.calendar.loaded
export const getCalendarEvents = state => state.calendar.events
export const getCalendarStatus = state => state.calendar.status
export const getCurrentEvent = state => state.calendar.currentEvent

export const getCreateModalIsOpen = state => state.calendar.createModalIsOpen
export const getEditModalIsOpen = state => state.calendar.editModalIsOpen
export const getDeleteModalIsOpen = state => state.calendar.deleteModalIsOpen

export const getCreationStatus = state => state.calendar.creationStatus
export const getEditionStatus = state => state.calendar.editionStatus
export const getDeletionStatus = state => state.calendar.deletionStatus
