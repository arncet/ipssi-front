import React from 'react'

const MessagesTopbar = ({openComposeMessageModal}) => (
  <div className='Intranet_page_topbar Messages_topbar'>
    <div className='Intranet_page_topbar_left'>
      <div className='label-and-input'>
        <label htmlFor='message-search' className='label'>Rechercher</label>
        <input type='text' id='message-search' className='input-text input-text-black'/>
      </div>
      <div className='label-and-input'>
        <label className='label'>Sélection</label>
        <button className='button button-blue'>Tous séléctionner</button>
        <button className='button button-blue'>Tous déselectionner</button>
      </div>
    </div>
    <div className='Intranet_page_topbar_right'>
      <div className='label-and-input'>
        <label className='label'>Gestion</label>
        <button className='button button-blue' onClick={() => openComposeMessageModal()}>Nouveau</button>
        <button className='button button-green'>Répondre</button>
        <button className='button button-red'>Supprimer</button>
      </div>
    </div>
  </div>
)

export default MessagesTopbar
