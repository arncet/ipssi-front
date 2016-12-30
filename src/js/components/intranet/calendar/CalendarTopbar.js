import React from 'react'

const CalendarTopbar = ({eventSelected, openCreateModal, openEditModal, openDeleteModal}) => (
  <div className='Intranet_page_topbar Calendar_topbar'>
    <div className='Intranet_page_topbar_left'>
      <div className='label-and-input'>
        <label className='label'>Gestion</label>
        <button className='button button-green' onClick={() => openCreateModal()}>Créer</button>
        <button className='button button-blue' disabled={!eventSelected} onClick={() => openEditModal()}>Modifier</button>
        <button className='button button-red' disabled={!eventSelected} onClick={() => openDeleteModal()}>Supprimer</button>
      </div>
    </div>
  </div>
)

export default CalendarTopbar
