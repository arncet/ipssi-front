import React from 'react'
import Modal from '../../../Modal'

const DeleteModal = ({event, overWindow, close, deleteEvent}) => (
  <Modal overWindow={overWindow} onClickOverlay={close} display={true}>
    <div className='Modal_delete'>
      <div className='Modal_header'>
        Supprimer un evenement
        <div className='fa fa-times' onClick={() => close()}/>
      </div>
      <div className='Modal_body'>
        {`Voulez-vous vraiment supprimer l'evenement ${event.summary || '(Sans titre)'} ?`}
      </div>
      <div className='Modal_footer'>
        <button className='button button-red' onClick={() => deleteEvent(event.id)}>Supprimer</button>
        <button className='button button-red' onClick={() => close()}>Annuler</button>
      </div>
    </div>
  </Modal>
)

export default DeleteModal
