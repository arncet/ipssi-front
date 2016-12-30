import React from 'react'
import Modal from '../../../Modal'

const DeleteModal = ({overWindow, close, display}) => (
  <Modal overWindow={overWindow} onClickOverlay={close} display={display}>
    <div className='Modal_delete'>
      <div className='Modal_header'>
        Supprimer un evenement
        <div className='fa fa-times' onClick={() => close()}/>
      </div>
      <div className='Modal_body'>

      </div>
      <div className='Modal_footer'>
        <button className='button button-red' onClick={() => close()}>Supprimer</button>
        <button className='button button-red' onClick={() => close()}>Annuler</button>
      </div>
    </div>
  </Modal>
)

export default DeleteModal
