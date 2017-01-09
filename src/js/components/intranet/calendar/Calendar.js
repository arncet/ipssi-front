import React, {Component} from 'react'

//Queries
import QueryGoogleAuth from '../../../containers/queries/GoogleAuth'
import QueryCalendar from '../../../containers/queries/Calendar'

//Components
import CalendarTopbar from './CalendarTopbar'
import CalendarDaysAndHours from './CalendarDaysAndHours'
import ModalError from '../../ModalError'
import Loader from '../../Loader'
import CalendarEventPreview from './CalendarEventPreview'
import CreateModal from './modals/CreateModal'
import EditModal from './modals/EditModal'
import DeleteModal from './modals/DeleteModal'

class Calendar extends Component{
  render() {
    const {isLoading, error, cleanCLaendarerror, events, currentEvent,
      setCurrentEvent, openCreateModal, closeCreateModal, openEditModal,
      closeEditModal, openDeleteModal, closeDeleteModal, createModalIsOpen,
      editModalIsOpen, deleteModalIsOpen, createEvent, editEvent, deleteEvent,
      creationStatus, editionStatus, deletionStatus, stashEvent} = this.props

    return (
      <div className="Intranet_page Intranet_calendar_page">
        <QueryGoogleAuth/>
        <QueryCalendar/>
        {isLoading ? <Loader message='Chargement de votre agenda ...'/> : null}
        <ModalError overWindow={false} display={error} close={cleanCLaendarerror}/>
        {createModalIsOpen ? <CreateModal close={closeCreateModal} createEvent={createEvent} creationStatus={creationStatus} event={stashEvent}/> : null}
        {editModalIsOpen ? <EditModal close={closeEditModal} editEvent={editEvent} editionStatus={editionStatus} event={currentEvent}/> : null}
        {deleteModalIsOpen ? <DeleteModal close={closeDeleteModal} deleteEvent={deleteEvent} deletionStatus={deletionStatus} event={currentEvent}/> : null}
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>Agenda : </h1>
          <CalendarTopbar
            openCreateModal={openCreateModal}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
            currentEvent={currentEvent}
          />
          {currentEvent ? <CalendarEventPreview currentEvent={currentEvent}/> : null}
        </div>
        <div className='Intranet_body Intranet_calendar_body'>
          <CalendarDaysAndHours events={events} onCurrentEventChange={setCurrentEvent} openCreateModal={openCreateModal} openEditModal={openEditModal}/>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.creationStatus !== 'success' && nextProps.creationStatus === 'success') nextProps.closeCreateModal()
  }
}

export default Calendar

