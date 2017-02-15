import React from 'react'
import Modal from '../Modal'

const DeleteAccountModal = ({isOpen, close, deleteAccount}) => (
  <Modal overWindow={true} onClickOverlay={close} display={isOpen}>
    <div className='Modal_delete'>
      <div className='Modal_header'>
        Supprimer son compte
        <div className='fa fa-times' onClick={() => close()}/>
      </div>
      <div className='Modal_body'>
        Voulez-vous vraiment supprimer votre compte ?
      </div>
      <div className='Modal_footer'>
        <button className='button button-red' onClick={() => deleteAccount(event.id)}>Supprimer</button>
        <button className='button button-red' onClick={() => close()}>Annuler</button>
      </div>
    </div>
  </Modal>
)

export default DeleteAccountModal
